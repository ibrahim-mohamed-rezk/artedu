"use client";

import { getData, postData } from "@/libs/axios/backendServer";
import { useAppSelector } from "@/libs/store/hooks";
import { useEffect, useState } from "react";
import Link from "next/link";

interface NotificationItem {
  id: number;
  title: string;
  body: string;
  type: string | null;
  image: string | null;
  url: string | null;
  is_read: boolean;
  created_at?: string;
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
          { Authorization: `Bearer ${token}` }
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

  const markAsRead = async (notificationId: number) => {
    try {
      await postData(
        `notifications-api/${notificationId}/read`,
        {},
        { Authorization: `Bearer ${token}` }
      );
      
      // Update local state
      setNotifications((prev) =>
        prev.map((notif) =>
          notif.id === notificationId ? { ...notif, is_read: true } : notif
        )
      );
    } catch (error) {
      console.error("Error marking notification as read:", error);
    }
  };

  const formatDate = (dateString?: string) => {
    if (!dateString) return "";
    
    const date = new Date(dateString);
    const now = new Date();
    const diffInMs = now.getTime() - date.getTime();
    const diffInHours = Math.floor(diffInMs / (1000 * 60 * 60));
    const diffInDays = Math.floor(diffInHours / 24);

    if (diffInHours < 1) {
      const diffInMinutes = Math.floor(diffInMs / (1000 * 60));
      return `منذ ${diffInMinutes} دقيقة`;
    } else if (diffInHours < 24) {
      return `منذ ${diffInHours} ساعة`;
    } else if (diffInDays < 7) {
      return `منذ ${diffInDays} يوم`;
    } else {
      return date.toLocaleDateString("ar-EG", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
    }
  };

  const unreadCount = notifications.filter((n) => !n.is_read).length;

  return (
    <div className="flex flex-col gap-6 w-full">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          {unreadCount > 0 && (
            <span className="bg-orange-600 text-white text-xs font-bold px-3 py-1 rounded-full">
              {unreadCount} جديد
            </span>
          )}
        </div>
        <h2 className="text-2xl font-bold font-sst-arabic text-[#26577c] flex items-center gap-2">
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 22C10.8954 22 10 21.1046 10 20H14C14 21.1046 13.1046 22 12 22Z"
              fill="#26577c"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M18 13.18V10C18 6.68629 15.3137 4 12 4C8.68629 4 6 6.68629 6 10V13.18C5.40671 13.6072 5 14.2714 5 15.0249V16C5 17.1046 5.89543 18 7 18H17C18.1046 18 19 17.1046 19 16V15.0249C19 14.2714 18.5933 13.6072 18 13.18Z"
              fill="#26577c"
            />
          </svg>
          الإشعارات
        </h2>
      </div>

      {loading ? (
        <div className="flex items-center justify-center py-12">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-600"></div>
        </div>
      ) : notifications?.length === 0 ? (
        <div className="bg-white rounded-[20px] shadow-[0px_3px_4px_0px_rgba(0,0,0,0.03)] p-12 text-center border border-[#f1f1f2]">
          <svg
            className="w-20 h-20 mx-auto mb-4 text-gray-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
            />
          </svg>
          <p className="text-gray-500 font-sst-arabic text-lg">
            لا توجد إشعارات جديدة حالياً
          </p>
        </div>
      ) : (
        <div className="flex flex-col gap-3">
          {notifications?.map((item) => (
            <div
              key={item.id}
              onClick={() => !item.is_read && markAsRead(item.id)}
              className={`bg-white rounded-[15px] border transition-all cursor-pointer ${
                item.is_read
                  ? "border-[#f1f1f2] shadow-[0px_2px_4px_rgba(0,0,0,0.02)] hover:shadow-[0px_4px_8px_rgba(0,0,0,0.05)]"
                  : "border-orange-200 bg-orange-50/30 shadow-[0px_3px_6px_rgba(229,86,4,0.1)] hover:shadow-[0px_5px_10px_rgba(229,86,4,0.15)]"
              }`}
            >
              <div className="p-4 flex gap-4 items-start">
                {/* Image */}
                {item.image && (
                  <div className="flex-shrink-0 w-[80px] h-[80px] rounded-[10px] overflow-hidden border border-[#f1f1f2]">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}

                {/* Content */}
                <div className="flex-1 text-right">
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <div className="flex items-center gap-2">
                      {/* Unread indicator */}
                      {!item.is_read && (
                        <span className="w-2 h-2 bg-orange-600 rounded-full animate-pulse"></span>
                      )}
                      {/* Date */}
                      {item.created_at && (
                        <span className="text-xs text-gray-400 font-sst-arabic">
                          {formatDate(item.created_at)}
                        </span>
                      )}
                    </div>
                    
                    <h3
                      className={`font-bold font-sst-arabic text-base ${
                        item.is_read ? "text-[#26577c]" : "text-orange-600"
                      }`}
                    >
                      {item.title}
                    </h3>
                  </div>

                  <p className="text-sm text-gray-600 font-sst-arabic leading-relaxed mb-3">
                    {item.body}
                  </p>

                  {/* Type badge and URL */}
                  <div className="flex items-center justify-between">
                    {item.url && (
                      <Link
                        href={item.url}
                        onClick={(e) => e.stopPropagation()}
                        className="text-xs text-orange-600 font-medium hover:text-orange-700 hover:underline flex items-center gap-1"
                      >
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path d="M9 5l7 7-7 7" />
                        </svg>
                        عرض المزيد
                      </Link>
                    )}
                    
                    {item.type && (
                      <span className="text-xs bg-[#26577c]/10 text-[#26577c] px-3 py-1 rounded-full font-sst-arabic">
                        {item.type}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default NotificationsList;
