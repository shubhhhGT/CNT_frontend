import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import {
  addCourseDetails,
  editCourseDetails,
  fetchCourseCategories,
} from "../../../../../services/operations/courseDetailsAPI";
import { HiOutlineCurrencyRupee } from "react-icons/hi";
import RequirementField from "./RequirementField";
import {
  setCourse,
  setStep,
  setEditCourse,
  resetCourseState,
} from "../../../../../slices/courseSlice";
import { MdNavigateNext } from "react-icons/md";
import { toast } from "react-hot-toast";
import { COURSE_STATUS, COURSE_TYPE } from "../../../../../utils/constants";
import TagInput from "./TagInput";
import CourseThumbnail from "./CourseThumbnail";
import { uploadVideoInChunks } from "../../../../../utils/chunkedUpload";

const CourseInformationForm = () => {
  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors },
  } = useForm();

  const { token } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const { course, editCourse } = useSelector((state) => state.course);

  const [loading, setLoading] = useState(false);

  const [courseCategories, setCourseCategories] = useState([]);

  useEffect(() => {
    const getCategories = async () => {
      setLoading(true);
      const categories = await fetchCourseCategories();
      if (categories.length > 0) {
        setCourseCategories(categories);
      }
      setLoading(false);
    };

    // If editcourse flag is true then only set the course
    if (editCourse && course) {
      setValue("courseTitle", course.courseName);
      setValue("courseShortDesc", course.courseDescription);
      setValue("coursePrice", course.price);
      setValue("courseTags", course.tag);
      setValue("courseCategory", course.category);
      setValue("courseBenefits", course.whatYouWillLearn);
      setValue(
        "courseRequirements",
        Array.isArray(course.instructions)
          ? course.instructions
          : JSON.parse(course.instructions || "[]")
      );
      setValue("courseImage", course.thumbnail);
      setValue("courseType", course.courseType);
    }

    getCategories();
    // eslint-disable-next-line
  }, []);

  const isFormUpdated = () => {
    const currentValues = getValues();
    if (
      currentValues.courseTitle !== course.courseName ||
      currentValues.courseShortDesc !== course.courseDescription ||
      currentValues.coursePrice !== course.price ||
      currentValues.courseTags.toString() !== course.tag.toString() ||
      currentValues.courseCategory._id !== course.category._id ||
      currentValues.courseBenefits !== course.whatYouWillLearn ||
      currentValues.courseImage !== course.thumbnail ||
      currentValues.courseRequirements.toString() !==
        course.instructions.toString() ||
      currentValues.courseType !== course.courseType
    )
      return true;
    else return false;
  };

  //   Handles next button click
  const onSubmit = async (data) => {
    // If course was editted
    if (editCourse) {
      if (isFormUpdated()) {
        // Get the values of different form fields
        const currentValues = getValues();
        // Create a new form data
        const formData = new FormData();
        setLoading(true);

        // Add all the values in the formdata
        formData.append("courseId", course._id);
        if (currentValues.courseTitle !== course.courseName) {
          formData.append("courseName", data.courseTitle);
        }

        if (currentValues.courseShortDesc !== course.courseDescription) {
          formData.append("courseDescription", data.courseShortDesc);
        }

        if (currentValues.coursePrice !== course.price) {
          formData.append("price", data.coursePrice);
        }

        if (currentValues.courseBenefits !== course.whatYouWillLearn) {
          formData.append("whatYouWillLearn", data.courseBenefits);
        }

        if (currentValues.courseCategory._id !== course.category._id) {
          formData.append("category", data.courseCategory);
        }

        if (currentValues.courseType !== course.courseType) {
          formData.append("courseType", data.courseType);
        }

        if (
          currentValues.courseRequirements.toString() !==
          course.instructions.toString()
        ) {
          formData.append(
            "instructions",
            JSON.stringify(data.courseRequirements)
          );
        }

        if (currentValues.courseTags.toString() !== course.tag.toString()) {
          formData.append("tag", JSON.stringify(data.courseTags));
        }

        if (currentValues.courseImage !== course.thumbnail) {
          let thumbnail = data.courseImage;
          if (thumbnail instanceof File) {
            try {
              thumbnail = await uploadVideoInChunks(thumbnail, token);
            } catch (err) {
              toast.error("Thumbnail update failed");
              setLoading(false);
              return;
            }
          }
          formData.append("thumbnailImage", thumbnail);
        }

        // API call for edit course
        const result = await editCourseDetails(formData, token);
        setLoading(false);

        if (result) {
          dispatch(setStep(2));
          dispatch(setCourse(result));
          dispatch(setEditCourse(false)); // Ensure the edit mode is off for new courses
        }
      } else {
        toast.error("No changes made to the form");
      }
    } else {
      // For creating a new course, reset state first
      dispatch(resetCourseState());
      setLoading(true);

      // Prepare data for new course
      const formData = new FormData();
      formData.append("courseName", data.courseTitle);
      formData.append("courseDescription", data.courseShortDesc);
      formData.append("price", data.coursePrice);
      formData.append("whatYouWillLearn", data.courseBenefits);
      formData.append("category", data.courseCategory);
      formData.append("instructions", JSON.stringify(data.courseRequirements));
      formData.append("tag", JSON.stringify(data.courseTags));
      formData.append("status", COURSE_STATUS.DRAFT);
      formData.append("courseType", data.courseType);

      let thumbnail = null;
      if (data.courseImage instanceof File) {
        try {
          thumbnail = await uploadVideoInChunks(data.courseImage, token);
        } catch (err) {
          toast.error("Thumbnail upload failed");
          setLoading(false);
          return;
        }
      }
      formData.append("thumbnailImage", thumbnail);

      const result = await addCourseDetails(formData, token);
      setLoading(false);

      if (result) {
        dispatch(setStep(2));
        dispatch(setCourse(result)); // Update course state with new course details
      }
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="border border-richblack-700 rounded-md bg-richblack-800 sm:p-6 p-2 space-y-8"
    >
      {/* Course Title */}
      <div className="flex flex-col space-y-2">
        <label htmlFor="courseTitle" className="text-sm text-richblack-5">
          Course Title <sup className="text-pink-200">*</sup>
        </label>
        <input
          type="text"
          name="courseTitle"
          id="courseTitle"
          placeholder="Enter Course Title"
          {...register("courseTitle", { required: true })}
          className="form-style !bg-richblack-700"
        />
        {errors.courseTitle && (
          <span className="ml-2 text-xs tracking-wide text-pink-200">
            Please enter course title.
          </span>
        )}
      </div>

      {/* Course short desc */}
      <div className="flex flex-col space-y-2">
        <label htmlFor="courseShortDesc" className="text-sm text-richblack-5">
          Course Short Description <sup className="text-pink-200">*</sup>
        </label>
        <textarea
          name="courseShortDesc"
          id="courseShortDesc"
          placeholder="Enter Description"
          className="form-style !bg-richblack-700 min-h-[130px] resize-none"
          {...register("courseShortDesc", { required: true })}
        />
        {errors.courseShortDesc && (
          <span className="ml-2 text-xs tracking-wide text-pink-200">
            Please enter Description.
          </span>
        )}
      </div>

      {/* Course Price */}
      <div className="flex flex-col space-y-2">
        <label htmlFor="coursePrice" className="text-sm text-richblack-5">
          Course Price <sup className="text-pink-200">*</sup>
        </label>
        <div className="relative">
          <input
            name="coursePrice"
            id="coursePrice"
            placeholder="Enter Price"
            className="form-style !bg-richblack-700 !pl-12 w-full"
            {...register("coursePrice", {
              required: true,
              valueAsNumber: true,
              pattern: { value: /^(0|[1-9]\d*)(\.\d+)?$/ },
            })}
          />
          <HiOutlineCurrencyRupee className="absolute left-3 top-1/2 inline-block -translate-y-1/2 text-2xl text-richblack-400" />
        </div>
        {errors.coursePrice && (
          <span className="ml-2 text-xs tracking-wide text-pink-200">
            Please enter course price.
          </span>
        )}
      </div>

      {/* Course Category */}
      <div className="flex flex-col space-y-2">
        <label htmlFor="courseCategory" className="text-sm text-richblack-5">
          Course Category <sup className="text-pink-200">*</sup>
        </label>
        <select
          id="courseCategory"
          defaultValue={""}
          className="form-style !bg-richblack-700"
          {...register("courseCategory", { required: true })}
        >
          <option value="" disabled>
            Choose a Category
          </option>
          {!loading &&
            courseCategories.map((category, index) => (
              <option key={index} value={category?._id}>
                {category?.name}
              </option>
            ))}
        </select>
        {errors.courseCategory && (
          <span className="ml-2 text-xs tracking-wide text-pink-200">
            Please select course category.
          </span>
        )}
      </div>

      {/* Tags for a course */}
      <TagInput
        label="Tags"
        name="courseTags"
        placeholder="Enter Tags and Press Enter"
        errors={errors}
        register={register}
        setValue={setValue}
        getValues={getValues}
      />

      {/* Course thumbnail */}
      <CourseThumbnail
        label="Course Thumbnail"
        name="courseImage"
        register={register}
        errors={errors}
        setValue={setValue}
        editData={editCourse ? course?.thumbnail : null}
      />

      {/* Course Benefits */}
      <div className="flex flex-col space-y-2">
        <label htmlFor="courseBenefits" className="text-sm text-richblack-5">
          Benefits of the course <sup className="text-pink-200">*</sup>
        </label>
        <textarea
          name="courseBenefits"
          id="courseBenefits"
          placeholder="Enter Benefits of the course"
          className="form-style !bg-richblack-700 min-h-[130px] resize-none"
          {...register("courseBenefits", { required: true })}
        />
        {errors.courseBenefits && (
          <span className="ml-2 text-xs tracking-wide text-pink-200">
            Please enter Course Benefits.
          </span>
        )}
      </div>

      {/* Course Type */}
      <div className="flex flex-col space-y-2">
        <label htmlFor="courseType" className="text-sm text-richblack-5">
          Course Type <sup className="text-pink-200">*</sup>
        </label>
        <select
          id="courseType"
          defaultValue=""
          className="form-style !bg-richblack-700"
          {...register("courseType", { required: true })}
        >
          <option value="" disabled>
            Choose a Course Type
          </option>
          {Object.entries(COURSE_TYPE).map(([key, value]) => (
            <option key={key} value={value}>
              {value}
            </option>
          ))}
        </select>
        {errors.courseType && (
          <span className="ml-2 text-xs tracking-wide text-pink-200">
            Please select a course type.
          </span>
        )}
      </div>

      {/* Course requirements */}
      <RequirementField
        name="courseRequirements"
        label="Requirements/Instructions"
        register={register}
        errors={errors}
        setValue={setValue}
        getValues={getValues}
        editData={editCourse ? course?.instructions : []}
      />

      {/* Buttons */}
      <div className="flex justify-end gap-x-2">
        {editCourse && (
          <button
            disabled={loading}
            onClick={() => dispatch(setStep(2))}
            className="flex items-center bg-richblack-300 cursor-pointer gap-x-2 rounded-md py-2 px-5 font-semibold text-richblack-900"
          >
            Continue Without Saving
          </button>
        )}
        <button
          disabled={loading}
          className="flex items-center bg-yellow-50 cursor-pointer gap-x-2 rounded-md py-2 px-5 font-semibold text-richblack-900"
        >
          {editCourse ? "Save Changes" : "Next"}
          <MdNavigateNext />
        </button>
      </div>
    </form>
  );
};

export default CourseInformationForm;
