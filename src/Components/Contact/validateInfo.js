const validateInfo = (values) => {
  let errors = {};

  if (!values.name.trim() || values.name === null || values.name.length === 0) {
    errors.name = 'Name is required';
  }

  if (!values.email || values.email === null || values.email.length === 0) {
    errors.email = 'Email is required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = 'Email address is invalid';
  }
  if (
    !values.subject ||
    values.subject === null ||
    values.subject.length === 0
  ) {
    errors.subject = 'Subject is required';
  }
  if (
    !values.message ||
    values.message === null ||
    values.message.length === 0
  ) {
    errors.message = 'Message body is required';
  }

  return errors;
};

export default validateInfo;
