"use client";

import { getData } from "@/libs/axios/backendServer";
import {
  CourseFilters as CourseFiltersType,
  Level,
  Subject,
} from "@/libs/types/tpes";
import { useEffect, useRef, useState } from "react";

const CourseFilters = ({
  setOpenFilters,
  filters,
  setFilters,
}: {
  setOpenFilters: React.Dispatch<React.SetStateAction<boolean>>;
  filters: CourseFiltersType;
  setFilters: (filters: CourseFiltersType) => void;
}) => {
  const filterRef = useRef<HTMLDivElement>(null);
  const [levels, setLevels] = useState<Level[]>([]);
  const [subjects, setSubjects] = useState<Subject[]>([]);

  // Local state for pending changes
  const [localFilters, setLocalFilters] = useState<CourseFiltersType>(filters);

  const feachLevels = async () => {
    try {
      const response = await getData("levels-api");
      setLevels(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const feachSubjects = async () => {
    try {
      const response = await getData("subjects-api");
      setSubjects(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    feachLevels();
    feachSubjects();
  }, []);

  useEffect(() => {
    setLocalFilters(filters);
  }, [filters]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        filterRef.current &&
        !filterRef.current.contains(event.target as Node)
      ) {
        setOpenFilters(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setOpenFilters]);

  const toggleLevelSelection = (levelId: number) => {
    const currentLevels = localFilters.level_id || [];
    const isSelected = currentLevels.includes(levelId);

    setLocalFilters({
      ...localFilters,
      level_id: isSelected
        ? currentLevels.filter((id) => id !== levelId)
        : [...currentLevels, levelId],
    });
  };

  const toggleSubjectSelection = (subjectId: number) => {
    const currentSubjects = localFilters.subject_id || [];
    const isSelected = currentSubjects.includes(subjectId);

    setLocalFilters({
      ...localFilters,
      subject_id: isSelected
        ? currentSubjects.filter((id) => id !== subjectId)
        : [...currentSubjects, subjectId],
    });
  };

  const handleReset = () => {
    setLocalFilters({
      search: null,
      level_id: null,
      subject_id: null,
      type: null,
      sort_by: null,
      sort_dir: null,
    });
  };

  const handleSubmit = () => {
    setFilters(localFilters);
    setOpenFilters(false);
  };

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black bg-opacity-50">
      <div
        ref={filterRef}
        className="w-full max-w-4xl p-5 bg-white rounded-[25px] border-2 border-[#f1f1f2] overflow-y-auto max-h-[90vh]"
      >
        <div className="relative">
          <div className="mb-4">
            <div className="flex items-center justify-end gap-2 text-black text-base font-normal font-['SST Arabic']">
              <span>تصفية حسب</span>
              <div className="w-2 h-3 bg-[#26577c] rounded-tl-[3px] rounded-tr-[1px] rounded-bl-[3px] rounded-br-[1px]"></div>
            </div>
          </div>
          <div className="mb-6">
            <div className="mb-2 text-right text-black text-base font-bold font-['SST Arabic']">
              المراحل الدراسية
            </div>
            <div className="flex flex-wrap justify-end gap-4">
              {levels.map((level) => (
                <div key={level.id} className="flex items-center gap-2">
                  <span className="text-right text-black text-sm font-normal font-['SST Arabic']">
                    {level.name}
                  </span>
                  <input
                    onChange={() => toggleLevelSelection(level.id as number)}
                    checked={(localFilters.level_id || []).includes(
                      level.id as number
                    )}
                    type="checkbox"
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="mb-6">
            <div className="flex justify-center gap-4 mb-4">
              {[
                { name: "مجاني", key: "free" },
                { name: "مدفوع", key: "paid" },
              ].map((type) => (
                <div
                  key={type.key}
                  className={`px-5 py-3 cursor-pointer rounded-[71px] border ${
                    type.key === localFilters.type
                      ? "bg-[#e55604]/20 border-[#e55604]"
                      : "bg-[#f1f1f2] border-[#f1f1f2]"
                  }`}
                  onClick={() =>
                    setLocalFilters({
                      ...localFilters,
                      type: type.key === localFilters.type ? null : type.key,
                    })
                  }
                >
                  <span className="text-black text-base font-normal font-['SST Arabic']">
                    {type.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="mb-6">
            <div className="mb-2 text-right text-black text-base font-bold font-['SST Arabic']">
              المادة
            </div>
            <div className="flex flex-wrap justify-end gap-4">
              {subjects.map((subject) => (
                <div key={subject.id} className="flex items-center gap-2">
                  <span className="text-right text-black text-sm font-normal font-['SST Arabic']">
                    {subject.name}
                  </span>
                  <input
                    onChange={() =>
                      toggleSubjectSelection(subject.id as number)
                    }
                    checked={(localFilters.subject_id || []).includes(
                      subject.id as number
                    )}
                    type="checkbox"
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="relative mt-4 mb-6">
            <input
              type="text"
              value={localFilters.search || ""}
              onChange={(e) =>
                setLocalFilters({ ...localFilters, search: e.target.value })
              }
              placeholder="محتاج تبحث عن ايه انهاردة ...."
              className="w-full pl-10 pr-4 py-3 bg-white rounded-[30px] shadow-sm border-2 border-[#f1f1f2] text-right text-[#8d8d8d] text-base font-normal font-['SST Arabic']"
            />
            <svg
              className="absolute left-3 top-1/2 transform -translate-y-1/2"
              width="24"
              height="24"
              viewBox="0 0 40 39"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.5"
                d="M33.213 17.9983C33.213 26.0388 26.6948 32.557 18.6543 32.557C10.6138 32.557 4.0957 26.0388 4.0957 17.9983C4.0957 9.95782 10.6138 3.4397 18.6543 3.4397C26.6948 3.4397 33.213 9.95782 33.213 17.9983Z"
                fill="#E55604"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M30.8689 30.2124C31.3177 29.7635 32.0455 29.7635 32.4943 30.2124L35.5593 33.2774C36.0081 33.7262 36.0081 34.4539 35.5593 34.9028C35.1104 35.3517 34.3827 35.3517 33.9338 34.9028L30.8689 31.8378C30.42 31.389 30.42 30.6612 30.8689 30.2124Z"
                fill="#E55604"
              />
            </svg>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 justify-center">
            <button
              onClick={handleReset}
              className="px-8 py-3 bg-white rounded-[30px] border-2 border-[#f1f1f2] text-[#8d8d8d] text-base font-medium font-['SST Arabic'] hover:bg-[#f1f1f2] transition-colors"
            >
              إعادة تعيين
            </button>
            <button
              onClick={handleSubmit}
              className="px-8 py-3 bg-[#e55604] rounded-[30px] text-white text-base font-medium font-['SST Arabic'] hover:bg-[#d14e03] transition-colors"
            >
              تطبيق الفلاتر
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseFilters;
