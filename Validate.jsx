const validate = (formData) => {
    const errors = {};
  
    // Validate first name
    if (!formData.firstName) {
      errors.firstName = 'First name is required';
    }
  
    // Validate last name
    if (!formData.lastName) {
      errors.lastName = 'Last name is required';
    }
  
    // Validate email
    if (!formData.email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email is invalid';
    }
  
    
    if (!formData.phoneNo) {
      errors.phoneNo = 'Phone number is required';
    } else if (!/^\d{10}$/.test(formData.phoneNo)) {
      errors.phoneNo = 'Phone number is invalid';
    }
  
    
  
    return errors;
  };
  
  export default validate;
  