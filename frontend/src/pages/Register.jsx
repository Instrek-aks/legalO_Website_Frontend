import React, { useEffect } from "react";

const Register = () => {
  useEffect(() => {
    window.location.replace("https://app.legalolympiad.com/exam/registration");
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <p className="text-gray-600 font-medium">Redirecting to Registration...</p>
    </div>
  );
};

export default Register;
