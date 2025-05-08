import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const ServiceProviderSettings = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    description: "",
    services: "",
    profilePicture: null,
  });
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await fetch(`/api/service-providers/${id}`);
        const data = await response.json();
        const services = Array.isArray(data.services)
          ? data.services.join(", ")
          : "";

        setFormData({
          name: data.name,
          email: data.email,
          address: data.address,
          description: data.description,
          services: services,
          profilePicture: null,
        });
      } catch (error) {
        console.error("Error fetching profile:", error);
      }
    };

    fetchProfile();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, profilePicture: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSubmit = new FormData();
    formDataToSubmit.append("name", formData.name);
    formDataToSubmit.append("email", formData.email);
    formDataToSubmit.append("address", formData.address);
    formDataToSubmit.append("description", formData.description);
    formDataToSubmit.append("services", formData.services);
    if (formData.profilePicture) {
      formDataToSubmit.append("profilePicture", formData.profilePicture);
    }

    try {
      const response = await fetch(`/api/service-providers/update/${id}`, {
        method: "PUT",
        body: formDataToSubmit,
      });

      if (response.ok) {
        navigate(`/service-provider-dashboard/${id}`); // Navigate back to dashboard or profile page
      } else {
        console.log("Failed to update profile.");
      }
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  return (
    <div className="container mt-5">
      <h2>Update Profile</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="form-control"
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="form-control"
            value={formData.email}
            onChange={handleChange}
            disabled
          />
        </div>

        <div className="mb-3">
          <label htmlFor="address" className="form-label">
            Address
          </label>
          <input
            type="text"
            id="address"
            name="address"
            className="form-control"
            value={formData.address}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            className="form-control"
            value={formData.description}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="services" className="form-label">
            Services (comma-separated)
          </label>
          <input
            type="text"
            id="services"
            name="services"
            className="form-control"
            value={formData.services}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="profilePicture" className="form-label">
            Profile Picture
          </label>
          <input
            type="file"
            id="profilePicture"
            name="profilePicture"
            className="form-control"
            onChange={handleFileChange}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default ServiceProviderSettings;
