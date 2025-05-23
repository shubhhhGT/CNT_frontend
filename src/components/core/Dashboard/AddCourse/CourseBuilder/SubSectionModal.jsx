import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import {
  createSubSection,
  updateSubSection,
} from "../../../../../services/operations/courseDetailsAPI";
import { setCourse } from "../../../../../slices/courseSlice";
import { RxCross2 } from "react-icons/rx";
import CourseThumbnail from "../CourseInformation/CourseThumbnail";
import Iconbtn from "../../../../../common/Iconbtn";
import { uploadVideoInChunks } from "../../../../../utils/chunkedUpload";

const SubSectionModal = ({
  modalData,
  setModalData,
  add = false,
  view = false,
  edit = false,
}) => {
  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const { token } = useSelector((state) => state.auth);
  const { course } = useSelector((state) => state.course);

  useEffect(() => {
    if (view || edit) {
      setValue("lectureTitle", modalData.title);
      setValue("lectureDesc", modalData.description);
      setValue("lectureVideo", modalData.videoUrl);
      setValue("lectureDuration", modalData.duration);
    }
    // eslint-disable-next-line
  }, []);

  const isFormUpdated = () => {
    const currentValues = getValues();

    if (
      currentValues.lectureTitle !== modalData.title ||
      currentValues.lectureDesc !== modalData.description ||
      currentValues.lectureVideo !== modalData.videoUrl ||
      currentValues.lectureDuration !== modalData.duration
    ) {
      return true;
    } else {
      return false;
    }
  };

  const handleEditSubSection = async () => {
    const currentValues = getValues();
    setLoading(true);

    let uploadedVideoUrl = modalData.videoUrl;

    if (currentValues.lectureVideo instanceof File) {
      try {
        uploadedVideoUrl = await uploadVideoInChunks(
          currentValues.lectureVideo,
          token
        );
      } catch (err) {
        toast.error("Video upload failed");
        setLoading(false);
        return;
      }
    }

    const payload = {
      sectionId: modalData.sectionId,
      subSectionId: modalData._id,
      title: currentValues.lectureTitle,
      description: currentValues.lectureDesc,
      duration: currentValues.lectureDuration,
      videoUrl: uploadedVideoUrl,
    };

    // API call
    const result = await updateSubSection(payload, token);

    if (result) {
      //   Here the api returns updated subsection
      // so update the course as per the subsection and dispatch the data
      const updatedCourseContent = course.courseContent.map((section) =>
        section._id === modalData.sectionId ? result : section
      );
      const updatedCourse = { ...course, courseContent: updatedCourseContent };
      dispatch(setCourse(updatedCourse));
    }

    setModalData(null);
    setLoading(false);
  };

  const onSubmit = async (data) => {
    if (view) {
      return;
    }
    if (edit) {
      if (!isFormUpdated) {
        toast.error("No changes made to the form");
      } else {
        handleEditSubSection();
      }
      return;
    }

    // Add Subsection
    setLoading(true);
    const formdata = new FormData();

    formdata.append("sectionId", modalData);
    formdata.append("title", data.lectureTitle);
    formdata.append("description", data.lectureDesc);
    // formdata.append("video", data.lectureVideo);
    formdata.append("duration", data.lectureDuration);

    const currentValues = getValues();
    let uploadedVideoUrl = modalData.videoUrl;
    if (currentValues.lectureVideo instanceof File) {
      try {
        uploadedVideoUrl = await uploadVideoInChunks(
          currentValues.lectureVideo,
          token
        );
      } catch (err) {
        toast.error("Video upload failed");
        return;
      }
    }
    formdata.append("videoUrl", uploadedVideoUrl);

    // api call
    const result = await createSubSection(formdata, token);

    if (result) {
      //   Here the api returns updated subsection
      // so update the course as per the subsection and dispatch the data
      const updatedCourseContent = course.courseContent.map((section) =>
        section._id === modalData ? result : section
      );
      const updatedCourse = { ...course, courseContent: updatedCourseContent };
      dispatch(setCourse(updatedCourse));
    }

    setModalData(null);
    setLoading(false);
  };
  return (
    <div className="fixed inset-0 z-[1000] !mt-0 grid h-screen w-screen place-items-center overflow-auto bg-white bg-opacity-10 backdrop-blur-sm">
      <div className="w-11/12 my-10 max-w-[700px] rounded-lg border border-richblack-400 bg-richblack-800 ">
        {/* Heading */}
        <div className="flex items-center justify-between rounded-t-lg bg-richblack-700 p-5">
          <p className="text-xl font-semibold text-richblack-5">
            {view ? "Viewing" : add ? "Adding" : edit ? "Editing" : ""} Lecture{" "}
          </p>
          <button onClick={() => (!loading ? setModalData(null) : {})}>
            <RxCross2 className="text-2xl text-richblack-5" />
          </button>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-8 px-8 py-10"
        >
          <CourseThumbnail
            name="lectureVideo"
            label="Lecture Video"
            register={register}
            errors={errors}
            setValue={setValue}
            video={true}
            viewData={view ? modalData.videoUrl : null}
            editData={edit ? modalData.videoUrl : null}
          />
          {/* Lecture Title */}
          <div className="flex flex-col space-y-2">
            <label htmlFor="lectureTitle" className="text-sm text-richblack-5">
              Lecture Title <sup className="text-pink-200">*</sup>
            </label>
            <input
              id="lectureTitle"
              placeholder="Enter Lecture Title"
              {...register("lectureTitle", { required: true })}
              className="form-style w-full !bg-richblack-700"
            />
            {errors.lectureTitle && (
              <span className="ml-2 tracking-wide text-pink-200 text-xs">
                {" "}
                Lecture title is required.
              </span>
            )}
          </div>

          {/* Lecture Description */}
          <div className="flex flex-col space-y-2">
            <label htmlFor="lectureDesc" className="text-sm text-richblack-5">
              Lecture Description <sup className="text-pink-200">*</sup>
            </label>
            <textarea
              id="lectureDesc"
              placeholder="Enter Lecture Description"
              {...register("lectureDesc", { required: true })}
              className="form-style w-full !bg-richblack-700 min-h-[130px]"
            />
            {errors.lectureDesc && (
              <span className="ml-2 tracking-wide text-pink-200 text-xs">
                Lecture Description is required.
              </span>
            )}
          </div>

          {/* Lecture duration */}
          <div className="flex flex-col space-y-2">
            <label
              htmlFor="lectureDuration"
              className="text-sm text-richblack-5"
            >
              Lecture Duration (in seconds){" "}
              <sup className="text-pink-200">*</sup>
            </label>
            <input
              id="lectureDuration"
              type="number"
              placeholder="Enter Lecture Duration"
              {...register("lectureDuration", { required: true, min: 1 })}
              className="form-style w-full !bg-richblack-700 appearance-none"
            />
            {errors.lectureDuration && (
              <span className="ml-2 tracking-wide text-pink-200 text-xs">
                Lecture duration is required and should be at least 1s.
              </span>
            )}
          </div>

          {/* Button */}
          {!view && (
            <div className="flex justify-end">
              <Iconbtn
                disabled={loading}
                text={loading ? "Loading..." : add ? "Save" : "Save Changes"}
                type="submit"
              />
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default SubSectionModal;
