import { ApiError } from "../utils/ApiError.js";
import { asyncHandler } from "../utils/AsyncHandler.js";

const ContactMessage = asyncHandler(async (req, res) => {
  const { firstName, lastName, phoneNumber, email, City, province, message } =
    req.body;

  try {
    if (
      !(
        firstName &&
        lastName &&
        phoneNumber &&
        email &&
        City &&
        province &&
        message
      )
    ) {
      throw new ApiError(400, "All fields are Required...!");
    }

    console.log(
      firstName,
      lastName,
      phoneNumber,
      email,
      City,
      province,
      message
    );
  } catch (error) {
    throw new ApiError(404, error.message);
  }
});

export { ContactMessage };
