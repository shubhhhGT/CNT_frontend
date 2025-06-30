import React, { useEffect, useState } from "react";

const RequirementField = ({
  name,
  label,
  register,
  errors,
  setValue,
  getValues,
  editData = [],
}) => {
  const [requirement, setRequirement] = useState("");
  const [requirementList, setRequirementList] = useState([]);

  const handleAddRequirement = () => {
    if (requirement) {
      setRequirementList([...requirementList, requirement]);
      setRequirement("");
    }
  };

  const handleRemoveRequirement = (index) => {
    const updated = [...requirementList];
    updated.splice(index, 1);
    setRequirementList(updated);
  };

  // Register field on mount
  useEffect(() => {
    register(name, {
      required: true,
      validate: (value) => value.length > 0,
    });
  }, [register, name]);

  // Hydrate from editData
  useEffect(() => {
    if (
      Array.isArray(editData) &&
      editData.length > 0 &&
      requirementList.length === 0
    ) {
      setRequirementList(editData);
    }
  }, [editData, requirementList.length]);

  // Sync to form
  useEffect(() => {
    setValue(name, requirementList);
  }, [requirementList, name, setValue]);

  return (
    <div className="flex flex-col space-y-2">
      <label htmlFor={name} className="text-sm text-richblack-5">
        {label} <sup className="text-pink-200">*</sup>
      </label>

      <div className="flex flex-col items-start space-y-2">
        <input
          type="text"
          id={name}
          value={requirement}
          className="form-style !bg-richblack-700 w-full"
          onChange={(e) => setRequirement(e.target.value)}
        />
        <button
          type="button"
          onClick={handleAddRequirement}
          className="font-semibold text-yellow-50"
        >
          Add
        </button>
      </div>

      {requirementList.length > 0 && (
        <ul className="mt-2 list-inside list-disc">
          {requirementList.map((req, idx) => (
            <li key={idx} className="flex items-center text-richblack-5">
              <span>{req}</span>
              <button
                type="button"
                className="ml-2 text-xs text-pure-greys-300"
                onClick={() => handleRemoveRequirement(idx)}
              >
                clear
              </button>
            </li>
          ))}
        </ul>
      )}

      {errors[name] && (
        <span className="ml-2 text-xs tracking-wide text-pink-200">
          {label} is required.
        </span>
      )}
    </div>
  );
};

export default RequirementField;
