import React, { useState } from "react";
import { Button } from "./ui/Button";
import { Input } from "./ui/Input";
import { Textarea } from "./ui/TextArea";
import {
  User,
  Mail,
  Phone,
  MapPin,
  GraduationCap,
  Calendar,
  BookOpen,
  ArrowLeft,
  Users,
  Gift,
} from "lucide-react";

const RegistrationForm = ({ registrationType, onBack }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    dateOfBirth: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    education: "",
    institution: "",
    graduationYear: "",
    courseInterest: "",
    experience: "",
    motivation: "",
    // Group registration fields
    teamName: "",
    teamMembers: "",
    teamLeader: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const getRegistrationTypeInfo = () => {
    switch (registrationType) {
      case "free":
        return {
          title: "Free Registration",
          icon: Gift,
          color: "text-green-600",
          bgColor: "bg-green-50",
          description: "Join our community and access basic resources",
          price: "₹0",
        };
      case "individual":
        return {
          title: "Individual Registration",
          icon: User,
          color: "text-orange-600",
          bgColor: "bg-orange-50",
          description: "Complete access for individual students",
          price: "₹2,999",
        };
      case "group":
        return {
          title: "Group Registration",
          icon: Users,
          color: "text-blue-600",
          bgColor: "bg-blue-50",
          description: "Team registration for 3-5 students",
          price: "₹4,999",
        };
      default:
        return {
          title: "Registration",
          icon: User,
          color: "text-gray-600",
          bgColor: "bg-gray-50",
          description: "Join Legal Olympiad",
          price: "",
        };
    }
  };

  const registrationInfo = getRegistrationTypeInfo();

  const validateForm = () => {
    const newErrors = {};

    // Required fields validation
    if (!formData.firstName.trim())
      newErrors.firstName = "First name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, ""))) {
      newErrors.phone = "Please enter a valid 10-digit phone number";
    }
    if (!formData.dateOfBirth)
      newErrors.dateOfBirth = "Date of birth is required";
    if (!formData.address.trim()) newErrors.address = "Address is required";
    if (!formData.city.trim()) newErrors.city = "City is required";
    if (!formData.state.trim()) newErrors.state = "State is required";
    if (!formData.pincode.trim()) {
      newErrors.pincode = "Pincode is required";
    } else if (!/^\d{6}$/.test(formData.pincode)) {
      newErrors.pincode = "Please enter a valid 6-digit pincode";
    }
    if (!formData.education.trim())
      newErrors.education = "Education level is required";
    if (!formData.institution.trim())
      newErrors.institution = "Institution name is required";
    if (!formData.graduationYear)
      newErrors.graduationYear = "Graduation year is required";
    if (!formData.courseInterest.trim())
      newErrors.courseInterest = "Course interest is required";
    if (!formData.motivation.trim())
      newErrors.motivation = "Motivation statement is required";

    // Group registration specific validation
    if (registrationType === "group") {
      if (!formData.teamName.trim())
        newErrors.teamName = "Team name is required";
      if (!formData.teamMembers.trim())
        newErrors.teamMembers = "Team members information is required";
      if (!formData.teamLeader.trim())
        newErrors.teamLeader = "Team leader name is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Send data to backend API with registration type
      const response = await fetch("http://localhost:5001/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          registrationType,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Registration failed");
      }

      setSubmitSuccess(true);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        dateOfBirth: "",
        address: "",
        city: "",
        state: "",
        pincode: "",
        education: "",
        institution: "",
        graduationYear: "",
        courseInterest: "",
        experience: "",
        motivation: "",
        teamName: "",
        teamMembers: "",
        teamLeader: "",
      });

      // Store the result for success message
      setSubmitSuccess(result);

      // Reset success message after 8 seconds
      setTimeout(() => setSubmitSuccess(false), 8000);
    } catch (error) {
      console.error("Registration error:", error);
      setErrors({
        submit:
          error.message || "Failed to submit registration. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitSuccess) {
    const getSuccessContent = () => {
      switch (submitSuccess.registrationType) {
        case "free":
          return {
            title: "Free Registration Successful!",
            message:
              "Welcome to Legal Olympiad! You now have access to our basic resources and community. Check your email for login details.",
            icon: Gift,
            color: "text-green-600",
            bgColor: "bg-green-100",
          };
        case "individual":
          return {
            title: "Individual Registration Submitted!",
            message:
              "Your registration has been submitted successfully. Please complete the payment of ₹2,999 to activate your premium account. We'll send payment instructions to your email.",
            icon: User,
            color: "text-orange-600",
            bgColor: "bg-orange-100",
          };
        case "group":
          return {
            title: "Group Registration Submitted!",
            message:
              "Your team registration has been submitted successfully. Please complete the payment of ₹4,999 to activate your team account. We'll send payment instructions to your email.",
            icon: Users,
            color: "text-blue-600",
            bgColor: "bg-blue-100",
          };
        default:
          return {
            title: "Registration Successful!",
            message:
              "Thank you for registering with Legal Olympiad. We've received your application and will contact you soon with further details.",
            icon: User,
            color: "text-green-600",
            bgColor: "bg-green-100",
          };
      }
    };

    const successContent = getSuccessContent();

    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-50 to-white py-12 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div
              className={`w-16 h-16 ${successContent.bgColor} rounded-full flex items-center justify-center mx-auto mb-6`}
            >
              <successContent.icon
                className={`w-8 h-8 ${successContent.color}`}
              />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {successContent.title}
            </h2>
            <p className="text-gray-600 mb-6">{successContent.message}</p>
            {submitSuccess.paymentRequired && (
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
                <p className="text-yellow-800 font-medium">
                  Payment Required: ₹{submitSuccess.amount}
                </p>
                <p className="text-yellow-700 text-sm mt-1">
                  Complete payment to unlock all features
                </p>
              </div>
            )}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={() => setSubmitSuccess(false)}
                className="bg-orange-800 hover:bg-orange-900"
              >
                Register Another Student
              </Button>
              <Button
                onClick={onBack}
                variant="outline"
                className="text-orange-800 border-orange-800 hover:bg-orange-50"
              >
                Back to Plans
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header with Back Button */}
        <div className="mb-8">
          <Button
            onClick={onBack}
            variant="outline"
            className="mb-6 text-orange-800 border-orange-800 hover:bg-orange-50"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Plans
          </Button>

          <div className="text-center mb-8">
            <div
              className={`w-20 h-20 ${registrationInfo.bgColor} rounded-full flex items-center justify-center mx-auto mb-4`}
            >
              <registrationInfo.icon
                className={`w-10 h-10 ${registrationInfo.color}`}
              />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              {registrationInfo.title}
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {registrationInfo.description}
            </p>
            {registrationInfo.price && (
              <div className="text-2xl font-bold text-orange-600 mt-2">
                {registrationInfo.price}
              </div>
            )}
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Group Registration Fields */}
            {registrationType === "group" && (
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-gray-900 flex items-center gap-2">
                  <Users className="w-6 h-6 text-blue-600" />
                  Team Information
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Team Name *
                    </label>
                    <Input
                      name="teamName"
                      value={formData.teamName}
                      onChange={handleInputChange}
                      placeholder="Enter your team name"
                      className={errors.teamName ? "border-red-500" : ""}
                    />
                    {errors.teamName && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.teamName}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Team Leader Name *
                    </label>
                    <Input
                      name="teamLeader"
                      value={formData.teamLeader}
                      onChange={handleInputChange}
                      placeholder="Enter team leader name"
                      className={errors.teamLeader ? "border-red-500" : ""}
                    />
                    {errors.teamLeader && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.teamLeader}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Team Members Information *
                  </label>
                  <Textarea
                    name="teamMembers"
                    value={formData.teamMembers}
                    onChange={handleInputChange}
                    placeholder="List all team members with their names, emails, and roles..."
                    rows={4}
                    className={errors.teamMembers ? "border-red-500" : ""}
                  />
                  {errors.teamMembers && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.teamMembers}
                    </p>
                  )}
                </div>
              </div>
            )}

            {/* Personal Information */}
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-gray-900 flex items-center gap-2">
                <User className="w-6 h-6 text-orange-800" />
                {registrationType === "group"
                  ? "Team Leader Information"
                  : "Personal Information"}
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    First Name *
                  </label>
                  <Input
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    placeholder="Enter your first name"
                    className={errors.firstName ? "border-red-500" : ""}
                  />
                  {errors.firstName && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.firstName}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name *
                  </label>
                  <Input
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    placeholder="Enter your last name"
                    className={errors.lastName ? "border-red-500" : ""}
                  />
                  {errors.lastName && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.lastName}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Enter your email address"
                      className={`pl-10 ${
                        errors.email ? "border-red-500" : ""
                      }`}
                    />
                  </div>
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <Input
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Enter your phone number"
                      className={`pl-10 ${
                        errors.phone ? "border-red-500" : ""
                      }`}
                    />
                  </div>
                  {errors.phone && (
                    <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Date of Birth *
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <Input
                      name="dateOfBirth"
                      type="date"
                      value={formData.dateOfBirth}
                      onChange={handleInputChange}
                      className={`pl-10 ${
                        errors.dateOfBirth ? "border-red-500" : ""
                      }`}
                    />
                  </div>
                  {errors.dateOfBirth && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.dateOfBirth}
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Address Information */}
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-gray-900 flex items-center gap-2">
                <MapPin className="w-6 h-6 text-orange-800" />
                Address Information
              </h2>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Complete Address *
                </label>
                <Textarea
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  placeholder="Enter your complete address"
                  rows={3}
                  className={errors.address ? "border-red-500" : ""}
                />
                {errors.address && (
                  <p className="text-red-500 text-sm mt-1">{errors.address}</p>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    City *
                  </label>
                  <Input
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    placeholder="Enter your city"
                    className={errors.city ? "border-red-500" : ""}
                  />
                  {errors.city && (
                    <p className="text-red-500 text-sm mt-1">{errors.city}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    State *
                  </label>
                  <Input
                    name="state"
                    value={formData.state}
                    onChange={handleInputChange}
                    placeholder="Enter your state"
                    className={errors.state ? "border-red-500" : ""}
                  />
                  {errors.state && (
                    <p className="text-red-500 text-sm mt-1">{errors.state}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Pincode *
                  </label>
                  <Input
                    name="pincode"
                    value={formData.pincode}
                    onChange={handleInputChange}
                    placeholder="Enter pincode"
                    className={errors.pincode ? "border-red-500" : ""}
                  />
                  {errors.pincode && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.pincode}
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Educational Information */}
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-gray-900 flex items-center gap-2">
                <GraduationCap className="w-6 h-6 text-orange-800" />
                Educational Information
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Highest Education Level *
                  </label>
                  <select
                    name="education"
                    value={formData.education}
                    onChange={handleInputChange}
                    className={`w-full h-10 rounded-md border px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm ${
                      errors.education
                        ? "border-red-500"
                        : "border-input bg-background"
                    }`}
                  >
                    <option value="">Select education level</option>
                    <option value="High School">High School</option>
                    <option value="Diploma">Diploma</option>
                    <option value="Bachelor's Degree">Bachelor's Degree</option>
                    <option value="Master's Degree">Master's Degree</option>
                    <option value="PhD">PhD</option>
                    <option value="Other">Other</option>
                  </select>
                  {errors.education && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.education}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Institution Name *
                  </label>
                  <Input
                    name="institution"
                    value={formData.institution}
                    onChange={handleInputChange}
                    placeholder="Enter institution name"
                    className={errors.institution ? "border-red-500" : ""}
                  />
                  {errors.institution && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.institution}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Graduation Year *
                  </label>
                  <Input
                    name="graduationYear"
                    type="number"
                    min="1950"
                    max="2030"
                    value={formData.graduationYear}
                    onChange={handleInputChange}
                    placeholder="Enter graduation year"
                    className={errors.graduationYear ? "border-red-500" : ""}
                  />
                  {errors.graduationYear && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.graduationYear}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Course of Interest *
                  </label>
                  <div className="relative">
                    <BookOpen className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <Input
                      name="courseInterest"
                      value={formData.courseInterest}
                      onChange={handleInputChange}
                      placeholder="e.g., Constitutional Law, Criminal Law"
                      className={`pl-10 ${
                        errors.courseInterest ? "border-red-500" : ""
                      }`}
                    />
                  </div>
                  {errors.courseInterest && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.courseInterest}
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Additional Information */}
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-gray-900 flex items-center gap-2">
                <BookOpen className="w-6 h-6 text-orange-800" />
                Additional Information
              </h2>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Legal Experience (if any)
                </label>
                <Textarea
                  name="experience"
                  value={formData.experience}
                  onChange={handleInputChange}
                  placeholder="Describe any legal experience, internships, or related activities..."
                  rows={3}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Why do you want to join Legal Olympiad? *
                </label>
                <Textarea
                  name="motivation"
                  value={formData.motivation}
                  onChange={handleInputChange}
                  placeholder="Tell us about your motivation and goals..."
                  rows={4}
                  className={errors.motivation ? "border-red-500" : ""}
                />
                {errors.motivation && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.motivation}
                  </p>
                )}
              </div>
            </div>

            {/* Submit Section */}
            <div className="border-t pt-8">
              {errors.submit && (
                <div className="bg-red-50 border border-red-200 rounded-md p-4 mb-6">
                  <p className="text-red-600 text-sm">{errors.submit}</p>
                </div>
              )}

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-orange-800 hover:bg-orange-900 text-white flex-1"
                >
                  {isSubmitting ? (
                    <>
                      <svg
                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Submitting...
                    </>
                  ) : (
                    "Submit Registration"
                  )}
                </Button>

                <Button
                  type="button"
                  variant="outline"
                  onClick={() => {
                    setFormData({
                      firstName: "",
                      lastName: "",
                      email: "",
                      phone: "",
                      dateOfBirth: "",
                      address: "",
                      city: "",
                      state: "",
                      pincode: "",
                      education: "",
                      institution: "",
                      graduationYear: "",
                      courseInterest: "",
                      experience: "",
                      motivation: "",
                      teamName: "",
                      teamMembers: "",
                      teamLeader: "",
                    });
                    setErrors({});
                  }}
                  className="flex-1 text-white"
                >
                  Reset Form
                </Button>
              </div>

              <p className="text-sm text-gray-500 mt-4 text-center">
                By submitting this form, you agree to our terms and conditions.
                We'll contact you soon with further details.
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;
