"use client";

import { getData } from "@/libs/axios/backendServer";
import { useAppSelector } from "@/libs/store/hooks";
import { useEffect, useState } from "react";
import Link from "next/link"; // Import Link if needed for future use with url

interface NotificationItem {
  title: string;
  body: string;
  type: string | null;
  image: string | null;
  url: string | null;
  // created_at? field is not in the sample but usually present.
  // If needed later, we can add it.
}

interface NotificationsResponse {
  data: {
    items: NotificationItem[];
    pagination: {
      total: number;
      count: number;
      per_page: number;
      current_page: number;
      last_page: number;
      // ... other pagination fields
    };
  };
  msg: string;
  status: boolean;
}

const NotificationsList = () => {
  const [notifications, setNotifications] = useState<NotificationItem[]>([]);
  const [loading, setLoading] = useState(true);
  const { token } = useAppSelector((state) => state.user);

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const response: NotificationsResponse = await getData(
          "notifications-api",
          {},
          { Authorization: `Bearer ${token}` },
        );

        setNotifications(response?.data?.items);
      } catch (error) {
        console.error("Error fetching notifications:", error);
      } finally {
        setLoading(false);
      }
    };
    if (token) {
      fetchNotifications();
    }
  }, [token]);

  console.log(notifications);

  return (
    <div className="flex flex-col gap-4 w-full">
      <h2 className="text-2xl font-bold mb-4 font-sst-arabic text-right text-[#26577c]">
        الإشعارات
      </h2>

      {loading ? (
        <div className="text-center py-8 text-gray-500 font-sst-arabic">
          جاري التحميل...
        </div>
      ) : notifications?.length === 0 ? (
        <div className="bg-white rounded-[15px] shadow-[0px_3px_4px_0px_rgba(0,0,0,0.03)] p-8 text-center text-gray-500 font-sst-arabic border border-[#f1f1f2]">
          لا توجد إشعارات جديدة حالياً
        </div>
      ) : (
        <div className="flex flex-col gap-3">
          {notifications?.map((item, index) => (
            <div
              key={index}
              className="bg-white flex gap-2 items-center justify-end p-4 rounded-[10px] border border-[#f1f1f2] text-right shadow-[0px_2px_4px_rgba(0,0,0,0.02)] transition-all hover:shadow-[0px_4px_8px_rgba(0,0,0,0.05)]"
            >
              <div className="flex justify-between items-start flex-row-reverse">
                <div className="flex-1">
                  <h3 className="font-bold text-[#26577c] font-sst-arabic text-lg mb-1">
                    {item?.title}
                  </h3>
                  <p className="text-sm text-gray-600 font-medium font-sst-arabic leading-relaxed">
                    {item?.body}
                  </p>

                  {item.url && (
                    <Link
                      href={item.url}
                      className="text-xs text-blue-500 mt-2 block hover:underline"
                    >
                      عرض المزيد
                    </Link>
                  )}
                </div>
              </div>
              {item.image && (
                <div className="w-[100px] border border-[#f1f1f2] rounded-[5px] h-[100px]">
                  <img src={item.image || ""} alt={item?.title || ""} />
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default NotificationsList;
