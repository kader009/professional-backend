import catchAsync from '../../../utils/catchAsync';
import sendResponse from '../../../utils/sendResponse'
import httpStatus from 'http-status'
import { AcademicSemesterServices } from './academicSemester.services';

const createAcademicSemester = catchAsync(async (req, res) => {
  const result = await AcademicSemesterServices.createAcademicSemesterIntoDB(
    req.body,
  );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Academic semester is created succesfully',
    data: result,
  });
});

export const AcademicController = {
  createAcademicSemester,
}
