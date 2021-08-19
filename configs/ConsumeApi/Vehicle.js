import swal from 'sweetalert';
import { default as axios } from '../axiosConfig';
const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxLCJlbWFpbCI6ImFyeWFpcmFtYTk4N0BnbWFpbC5jb20iLCJwcm9maWxlX2ltZyI6InB1YmxpYy9pbWcvcHJvZmlsZV9pbWcvOGUyZWY5ZDctMmFkNS00YjAzLWI1ZTYtZGU4MDU3NzI4Mzg3LmpwZyIsIm5hbWUiOiJhcnlhIGlyYW1hIHdhaG9ubyIsImdlbmRlciI6Im1hbGUiLCJwaG9uZV9udW1iZXIiOiIxMjM0NTY3ODkwIiwiYWRkcmVzcyI6ImtyYW5kZWdhbiBnYW5kdXNhcmkiLCJkYXRlX29mX2JpcnRoIjoiMjAyMS0wOC0wNlQxNzowMDowMC4wMDBaIiwicm9sZXMiOiJhZG1pbiIsImFjY291bnRfc3RhdHVzIjoiYWN0aXZlIiwiY3JlYXRlZF9hdCI6IjIwMjEtMDgtMThUMDI6NTM6MDkuMDAwWiIsImlhdCI6MTYyOTM1MTMzOSwiZXhwIjoxNjI5MzU4NTM5fQ.2dblh9MbnNMY6ikc9yRGmOYhNEsk8HubCgLkAUkPGK8';
export const addVehicle = async (formData, history) => {
  const dataAddVehicle = new FormData();
  dataAddVehicle.append('location_id', formData.location_id);
  dataAddVehicle.append('type_id', formData.type_id);
  dataAddVehicle.append('vehicles_name', formData.vehicles_name);
  dataAddVehicle.append('price', formData.price);
  dataAddVehicle.append('status', formData.status);
  dataAddVehicle.append('stock', formData.stock);
  dataAddVehicle.append('description', formData.description);
  for (let i = 0; i < formData.vehicle_image.length; i++) {
    dataAddVehicle.append('vehicle_image', formData.vehicle_image[i]);
  }
  try {
    await axios.post('/vehicles', dataAddVehicle, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'multipart/form-data',
      },
    });
    swal('Success', 'Successfully add vehicle', 'success');
    history.push('/type');
  } catch (error) {
    console.log(error);
  }
};
