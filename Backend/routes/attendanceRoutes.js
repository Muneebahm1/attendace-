import Attendance from '../models/Attendance.js'; // Assuming you have an Attendance model

export const markAttendance = async (req, res) => {
  try {
    const attendance = new Attendance({
      user: req.user.id,
      date: new Date(),
      status: 'Present',
    });
    await attendance.save();
    res.status(201).json(attendance);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server error');
  }
};

export const markLeave = async (req, res) => {
  try {
    const leave = new Attendance({
      user: req.user.id,
      date: new Date(),
      status: 'Leave',
    });
    await leave.save();
    res.status(201).json(leave);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server error');
  }
};

export const getAttendance = async (req, res) => {
  try {
    const attendance = await Attendance.find({ user: req.user.id });
    res.json(attendance);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server error');
  }
};
