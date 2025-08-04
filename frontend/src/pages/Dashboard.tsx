const Dashboard: React.FC = () => {
  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold text-slate-800 mb-6">Dashboard</h1>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <p className="text-slate-600">
          Welcome to your dashboard. Uploaded CVs and screening results will be
          displayed here.
        </p>
        {/* Placeholder for dashboard content, e.g., CV list, upload button */}
        <div className="mt-6 pt-6 border-t border-slate-200">
          <h2 className="text-xl font-semibold text-slate-700 mb-4">
            Coming Soon
          </h2>
          <p className="text-slate-500">
            Detailed CV management and analytics features are under development.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
