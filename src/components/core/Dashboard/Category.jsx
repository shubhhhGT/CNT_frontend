import { useMediaQuery } from "react-responsive";
import { GoSidebarExpand, GoSidebarCollapse } from "react-icons/go";
import Sidebar from "./Sidebar";
import { useEffect, useState } from "react";
import { fetchCourseCategories } from "../../../services/operations/courseDetailsAPI";
import { useForm } from "react-hook-form";
import { createCategory } from "../../../services/operations/categoryAPI";
import { useSelector } from "react-redux";

export default function Category() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm();
  const isMediumScreenOrLarger = useMediaQuery({ minWidth: 768 });
  const [sidebarIconClicked, setSidebarIconClicked] = useState(false);
  const [courseCategories, setCourseCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const { token } = useSelector((state) => state.auth);

  // Function to fetch categories
  const getCategories = async () => {
    setLoading(true);
    const categories = await fetchCourseCategories();
    if (categories.length > 0) {
      setCourseCategories(categories);
    }
    setLoading(false);
  };

  useEffect(() => {
    // Fetch categories on component mount
    getCategories();
    // eslint-disable-next-line
  }, []);

  const onSubmit = async (data) => {
    setLoading(true);
    await createCategory(data, setLoading, token)();
    setLoading(false);
    // Re-fetch categories after a new category is created
    getCategories();
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset({
        name: "",
        description: "",
      });
    }
  }, [isSubmitSuccessful, reset]);

  return (
    <>
      {/* Responsive design for small screen */}
      <div className="mb-4 md:hidden">
        {!isMediumScreenOrLarger &&
          (sidebarIconClicked ? (
            <div className="flex">
              <GoSidebarExpand
                size={24}
                fill="#AFB2BF"
                onClick={() => setSidebarIconClicked(!sidebarIconClicked)}
              />
              <Sidebar />
            </div>
          ) : (
            <GoSidebarCollapse
              size={24}
              fill="#AFB2BF"
              onClick={() => setSidebarIconClicked(!sidebarIconClicked)}
            />
          ))}
      </div>

      <div className="w-full flex flex-col sm:flex-row items-start gap-x-6">
        <div className="flex flex-1 flex-col w-full">
          <h1 className="mb-8 text-3xl font-medium text-richblack-5">
            Categories
          </h1>
          <div className="flex-1 bg-richblack-800 p-6 border border-richblack-700 rounded-md min-w-[250px]">
            {courseCategories.length === 0 ? (
              <div className="py-10 text-center text-2xl font-medium text-richblack-100">
                No categories as of now. Please create a category.
              </div>
            ) : (
              <ul className="space-y-2 text-richblack-5">
                <li className="text-richblack-5 mb-2">
                  {!loading &&
                    courseCategories.map((category, index) => (
                      <option key={index} value={category?._id}>
                        {category?.name}
                      </option>
                    ))}
                </li>
              </ul>
            )}
          </div>
        </div>

        {/* Main content to add new categories */}
        <div className="flex flex-1 flex-col mt-6 md:mt-0 w-full">
          <h1 className="mb-8 text-3xl font-medium text-richblack-5">
            Add New Category
          </h1>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-4 bg-richblack-800 p-6 rounded-md border border-richblack-700"
          >
            {/* Category Name */}
            <div className="flex flex-col space-y-2">
              <label className="text-sm text-richblack-5">
                Category Name <sup className="text-pink-200">*</sup>
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Enter Category Name"
                {...register("name", { required: true })}
                className="form-style !bg-richblack-700"
              />
              {errors.name && (
                <span className="ml-2 text-xs tracking-wide text-pink-200">
                  Please enter category name.
                </span>
              )}
            </div>

            {/* Category Description */}
            <div className="flex flex-col space-y-2">
              <label className="text-sm text-richblack-5">
                Category Description <sup className="text-pink-200">*</sup>
              </label>
              <input
                type="text"
                name="description"
                id="description"
                placeholder="Enter Category Description"
                {...register("description", { required: true })}
                className="form-style !bg-richblack-700"
              />
              {errors.description && (
                <span className="ml-2 text-xs tracking-wide text-pink-200">
                  Please enter category description.
                </span>
              )}
            </div>

            <button
              disabled={loading}
              className="flex w-full items-center justify-center bg-yellow-50 cursor-pointer gap-x-2 rounded-md py-2 px-5 font-semibold text-richblack-900"
            >
              Add Category
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
