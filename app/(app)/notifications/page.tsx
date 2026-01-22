import NotificationsList from "@/components/notifications/NotificationsList";

export default function NotificationsPage() {
  return (
    <div className="w-full min-h-screen bg-[#fffcfc] py-[40px] px-4 md:px-0">
        <div className="max-w-4xl mx-auto">
            <NotificationsList />
        </div>
    </div>
  );
}
