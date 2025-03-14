export const menuItems = [
  {
    name: "معلومات الحساب",
    path: "/profile/account-information",
    icon: (
      <div className="w-6 h-6 relative overflow-hidden">
        <div className="w-5 h-5 left-[2px] top-[2px] absolute bg-cyan-800" />
        <div className="w-2.5 h-3.5 left-[6.52px] top-[6px] absolute bg-white" />
      </div>
    ),
  },
  {
    name: "احصائياتي",
    path: "/profile/account-analytics",
    icon: (
      <div className="w-6 h-6 relative overflow-hidden">
        <div className="w-1 h-5 left-[9.50px] top-[2px] absolute bg-white" />
        <div className="w-1 h-3 left-[3.50px] top-[8px] absolute opacity-70 bg-white" />
        <div className="w-1 h-2 left-[15.50px] top-[13px] absolute opacity-70 bg-white" />
        <div className="w-5 h-[1.50px] left-[1px] top-[20.50px] absolute opacity-50 bg-white" />
      </div>
    ),
  },
  {
    name: "المفضلة",
    path: "/profile/favorites",
    icon: (
      <div className="w-6 h-6 relative rounded-[5px] overflow-hidden">
        <div className="w-5 h-4 left-[2px] top-[3.28px] absolute bg-cyan-800" />
      </div>
    ),
  },
  {
    name: "فواتيري",
    path: "/profile/invoices",
    icon: (
      <div className="w-6 h-6 relative overflow-hidden">
        <div className="w-4 h-5 left-[3px] top-[2px] absolute opacity-50 bg-cyan-800" />
        <div className="w-3 h-2 left-[6.25px] top-[6.75px] absolute bg-cyan-800" />
      </div>
    ),
  },
  {
    name: "الدعم",
    path: "/support",
    icon: (
      <div className="w-6 h-6 relative overflow-hidden">
        <div className="w-4 h-4 left-[4px] top-[4px] absolute opacity-50 bg-cyan-800" />
        <div className="w-2.5 h-2.5 left-[13.25px] top-[1.25px] absolute bg-cyan-800" />
      </div>
    ),
  },
  {
    name: "عنا",
    path: "/about",
    icon: (
      <div className="w-6 h-6 relative overflow-hidden">
        <div className="w-5 h-5 left-[1.25px] top-[1.25px] absolute bg-cyan-800" />
      </div>
    ),
  },
  {
    name: "تسجيل الخروج",
    icon: (
      <div className="w-6 h-6 relative rounded-[5px] overflow-hidden">
        <div className="w-5 h-3 left-[9px] top-[22px] absolute origin-top-left -rotate-90 opacity-50 bg-red-600 rounded-[3px]" />
        <div className="w-2 h-3.5 left-[1.25px] top-[15.75px] absolute origin-top-left -rotate-90 bg-red-600" />
      </div>
    ),
    isLogout: true,
    fun: () => localStorage.removeItem("token"),
  },
];
