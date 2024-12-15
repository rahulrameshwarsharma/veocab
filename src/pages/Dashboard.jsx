import React, { useState } from 'react'
import TotalCounts from '../components/TotalCounts'
import TotalUsers from "../assets/svgs/TotalUsers.svg"
import TotalDrivers from "../assets/svgs/TotalDrivers.svg"
import TotalHosts from "../assets/svgs/TotalHosts.svg"
import TotalBookings from "../assets/svgs/TotalBookings.svg"
import DataTable from '../components/DataTable'
import TableUI from '../components/Table'
import RentedCardTableData from '../components/RentedCarsTable'
import DemoCar from "../assets/images/DemoCar.png"
import HomeCharts from '../components/Charts/HomeCharts'


import { useDispatch, useSelector } from "react-redux";
import { login, resetError } from "../redux/features/auth/authSlice";

export const Dashboard = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { status, error } = useSelector((state) => state.auth);


  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login({ email, password }));
  };

  const tableData = [
    {
      name: "Peter Thiel",
      phone: "+1 3245 455 890",
      email: "Peter@mail.com",
      registrationDate: "12 Aug 2023, 09:30 PM",
      kyc: "Verified",
    },
    {
      name: "Blake Ricky",
      phone: "+1 2134 455 890",
      email: "Blake@mail.com",
      registrationDate: "23 Mar 2024, 11:21 AM",
      kyc: "Verified",
    },
    {
      name: "Randy Pausch",
      phone: "+1 4321 455 890",
      email: "Randy@mail.com",
      registrationDate: "21 Apr 2024, 01:59 PM",
      kyc: "Not verified",
    },
    {
      name: "Jeffrey Zaslow",
      phone: "+1 3789 455 890",
      email: "Jeffrey@mail.com",
      registrationDate: "03 Jul 2024, 10:30 AM",
      kyc: "Verified",
    },
    {
      name: "Carnegie Mellon",
      phone: "+1 7654 455 890",
      email: "Carnegie@mail.com",
      registrationDate: "01 Jan 2024, 04:40 PM",
      kyc: "Not verified",
    },
    {
      name: "John Mick",
      phone: "+1 1897 455 890",
      email: "Johnmick@mail.com",
      registrationDate: "23 Feb 2024, 12:12 PM",
      kyc: "Verified",
    },
    {
      name: "Peter Thiel",
      phone: "+1 3245 455 890",
      email: "Peter@mail.com",
      registrationDate: "12 Aug 2023, 09:30 PM",
      kyc: "Verified",
    },
    {
      name: "Blake Ricky",
      phone: "+1 2134 455 890",
      email: "Blake@mail.com",
      registrationDate: "23 Mar 2024, 11:21 AM",
      kyc: "Verified",
    },
    {
      name: "Randy Pausch",
      phone: "+1 4321 455 890",
      email: "Randy@mail.com",
      registrationDate: "21 Apr 2024, 01:59 PM",
      kyc: "Not verified",
    },
    {
      name: "Jeffrey Zaslow",
      phone: "+1 3789 455 890",
      email: "Jeffrey@mail.com",
      registrationDate: "03 Jul 2024, 10:30 AM",
      kyc: "Verified",
    },
    {
      name: "Carnegie Mellon",
      phone: "+1 7654 455 890",
      email: "Carnegie@mail.com",
      registrationDate: "01 Jan 2024, 04:40 PM",
      kyc: "Not verified",
    },
    {
      name: "John Mick",
      phone: "+1 1897 455 890",
      email: "Johnmick@mail.com",
      registrationDate: "23 Feb 2024, 12:12 PM",
      kyc: "Verified",
    }, {
      name: "Peter Thiel",
      phone: "+1 3245 455 890",
      email: "Peter@mail.com",
      registrationDate: "12 Aug 2023, 09:30 PM",
      kyc: "Verified",
    },
    {
      name: "Blake Ricky",
      phone: "+1 2134 455 890",
      email: "Blake@mail.com",
      registrationDate: "23 Mar 2024, 11:21 AM",
      kyc: "Verified",
    },
    {
      name: "Randy Pausch",
      phone: "+1 4321 455 890",
      email: "Randy@mail.com",
      registrationDate: "21 Apr 2024, 01:59 PM",
      kyc: "Not verified",
    },
    {
      name: "Jeffrey Zaslow",
      phone: "+1 3789 455 890",
      email: "Jeffrey@mail.com",
      registrationDate: "03 Jul 2024, 10:30 AM",
      kyc: "Verified",
    },
    {
      name: "Carnegie Mellon",
      phone: "+1 7654 455 890",
      email: "Carnegie@mail.com",
      registrationDate: "01 Jan 2024, 04:40 PM",
      kyc: "Not verified",
    },
    {
      name: "John Mick",
      phone: "+1 1897 455 890",
      email: "Johnmick@mail.com",
      registrationDate: "23 Feb 2024, 12:12 PM",
      kyc: "Verified",
    }, {
      name: "Peter Thiel",
      phone: "+1 3245 455 890",
      email: "Peter@mail.com",
      registrationDate: "12 Aug 2023, 09:30 PM",
      kyc: "Verified",
    },
    {
      name: "Blake Ricky",
      phone: "+1 2134 455 890",
      email: "Blake@mail.com",
      registrationDate: "23 Mar 2024, 11:21 AM",
      kyc: "Verified",
    },
    {
      name: "Randy Pausch",
      phone: "+1 4321 455 890",
      email: "Randy@mail.com",
      registrationDate: "21 Apr 2024, 01:59 PM",
      kyc: "Not verified",
    },
    {
      name: "Jeffrey Zaslow",
      phone: "+1 3789 455 890",
      email: "Jeffrey@mail.com",
      registrationDate: "03 Jul 2024, 10:30 AM",
      kyc: "Verified",
    },
    {
      name: "Carnegie Mellon",
      phone: "+1 7654 455 890",
      email: "Carnegie@mail.com",
      registrationDate: "01 Jan 2024, 04:40 PM",
      kyc: "Not verified",
    },
    {
      name: "John Mick",
      phone: "+1 1897 455 890",
      email: "Johnmick@mail.com",
      registrationDate: "23 Feb 2024, 12:12 PM",
      kyc: "Verified",
    }, {
      name: "Peter Thiel",
      phone: "+1 3245 455 890",
      email: "Peter@mail.com",
      registrationDate: "12 Aug 2023, 09:30 PM",
      kyc: "Verified",
    },
    {
      name: "Blake Ricky",
      phone: "+1 2134 455 890",
      email: "Blake@mail.com",
      registrationDate: "23 Mar 2024, 11:21 AM",
      kyc: "Verified",
    },
    {
      name: "Randy Pausch",
      phone: "+1 4321 455 890",
      email: "Randy@mail.com",
      registrationDate: "21 Apr 2024, 01:59 PM",
      kyc: "Not verified",
    },
    {
      name: "Jeffrey Zaslow",
      phone: "+1 3789 455 890",
      email: "Jeffrey@mail.com",
      registrationDate: "03 Jul 2024, 10:30 AM",
      kyc: "Verified",
    },
    {
      name: "Carnegie Mellon",
      phone: "+1 7654 455 890",
      email: "Carnegie@mail.com",
      registrationDate: "01 Jan 2024, 04:40 PM",
      kyc: "Not verified",
    },
    {
      name: "John Mick",
      phone: "+1 1897 455 890",
      email: "Johnmick@mail.com",
      registrationDate: "23 Feb 2024, 12:12 PM",
      kyc: "Verified",
    }, {
      name: "Peter Thiel",
      phone: "+1 3245 455 890",
      email: "Peter@mail.com",
      registrationDate: "12 Aug 2023, 09:30 PM",
      kyc: "Verified",
    },
    {
      name: "Blake Ricky",
      phone: "+1 2134 455 890",
      email: "Blake@mail.com",
      registrationDate: "23 Mar 2024, 11:21 AM",
      kyc: "Verified",
    },
    {
      name: "Randy Pausch",
      phone: "+1 4321 455 890",
      email: "Randy@mail.com",
      registrationDate: "21 Apr 2024, 01:59 PM",
      kyc: "Not verified",
    },
    {
      name: "Jeffrey Zaslow",
      phone: "+1 3789 455 890",
      email: "Jeffrey@mail.com",
      registrationDate: "03 Jul 2024, 10:30 AM",
      kyc: "Verified",
    },
    {
      name: "Carnegie Mellon",
      phone: "+1 7654 455 890",
      email: "Carnegie@mail.com",
      registrationDate: "01 Jan 2024, 04:40 PM",
      kyc: "Not verified",
    },
    {
      name: "John Mick",
      phone: "+1 1897 455 890",
      email: "Johnmick@mail.com",
      registrationDate: "23 Feb 2024, 12:12 PM",
      kyc: "Verified",
    }, {
      name: "Peter Thiel",
      phone: "+1 3245 455 890",
      email: "Peter@mail.com",
      registrationDate: "12 Aug 2023, 09:30 PM",
      kyc: "Verified",
    },
    {
      name: "Blake Ricky",
      phone: "+1 2134 455 890",
      email: "Blake@mail.com",
      registrationDate: "23 Mar 2024, 11:21 AM",
      kyc: "Verified",
    },
    {
      name: "Randy Pausch",
      phone: "+1 4321 455 890",
      email: "Randy@mail.com",
      registrationDate: "21 Apr 2024, 01:59 PM",
      kyc: "Not verified",
    },
    {
      name: "Jeffrey Zaslow",
      phone: "+1 3789 455 890",
      email: "Jeffrey@mail.com",
      registrationDate: "03 Jul 2024, 10:30 AM",
      kyc: "Verified",
    },
    {
      name: "Carnegie Mellon",
      phone: "+1 7654 455 890",
      email: "Carnegie@mail.com",
      registrationDate: "01 Jan 2024, 04:40 PM",
      kyc: "Not verified",
    },
    {
      name: "John Mick",
      phone: "+1 1897 455 890",
      email: "Johnmick@mail.com",
      registrationDate: "23 Feb 2024, 12:12 PM",
      kyc: "Verified",
    }, {
      name: "Peter Thiel",
      phone: "+1 3245 455 890",
      email: "Peter@mail.com",
      registrationDate: "12 Aug 2023, 09:30 PM",
      kyc: "Verified",
    },
    {
      name: "Blake Ricky",
      phone: "+1 2134 455 890",
      email: "Blake@mail.com",
      registrationDate: "23 Mar 2024, 11:21 AM",
      kyc: "Verified",
    },
    {
      name: "Randy Pausch",
      phone: "+1 4321 455 890",
      email: "Randy@mail.com",
      registrationDate: "21 Apr 2024, 01:59 PM",
      kyc: "Not verified",
    },
    {
      name: "Jeffrey Zaslow",
      phone: "+1 3789 455 890",
      email: "Jeffrey@mail.com",
      registrationDate: "03 Jul 2024, 10:30 AM",
      kyc: "Verified",
    },
    {
      name: "Carnegie Mellon",
      phone: "+1 7654 455 890",
      email: "Carnegie@mail.com",
      registrationDate: "01 Jan 2024, 04:40 PM",
      kyc: "Not verified",
    },
    {
      name: "John Mick",
      phone: "+1 1897 455 890",
      email: "Johnmick@mail.com",
      registrationDate: "23 Feb 2024, 12:12 PM",
      kyc: "Verified",
    }, {
      name: "Peter Thiel",
      phone: "+1 3245 455 890",
      email: "Peter@mail.com",
      registrationDate: "12 Aug 2023, 09:30 PM",
      kyc: "Verified",
    },
    {
      name: "Blake Ricky",
      phone: "+1 2134 455 890",
      email: "Blake@mail.com",
      registrationDate: "23 Mar 2024, 11:21 AM",
      kyc: "Verified",
    },
    {
      name: "Randy Pausch",
      phone: "+1 4321 455 890",
      email: "Randy@mail.com",
      registrationDate: "21 Apr 2024, 01:59 PM",
      kyc: "Not verified",
    },
    {
      name: "Jeffrey Zaslow",
      phone: "+1 3789 455 890",
      email: "Jeffrey@mail.com",
      registrationDate: "03 Jul 2024, 10:30 AM",
      kyc: "Verified",
    },
    {
      name: "Carnegie Mellon",
      phone: "+1 7654 455 890",
      email: "Carnegie@mail.com",
      registrationDate: "01 Jan 2024, 04:40 PM",
      kyc: "Not verified",
    },
    {
      name: "John Mick",
      phone: "+1 1897 455 890",
      email: "Johnmick@mail.com",
      registrationDate: "23 Feb 2024, 12:12 PM",
      kyc: "Verified",
    }, {
      name: "Peter Thiel",
      phone: "+1 3245 455 890",
      email: "Peter@mail.com",
      registrationDate: "12 Aug 2023, 09:30 PM",
      kyc: "Verified",
    },
    {
      name: "Blake Ricky",
      phone: "+1 2134 455 890",
      email: "Blake@mail.com",
      registrationDate: "23 Mar 2024, 11:21 AM",
      kyc: "Verified",
    },
    {
      name: "Randy Pausch",
      phone: "+1 4321 455 890",
      email: "Randy@mail.com",
      registrationDate: "21 Apr 2024, 01:59 PM",
      kyc: "Not verified",
    },
    {
      name: "Jeffrey Zaslow",
      phone: "+1 3789 455 890",
      email: "Jeffrey@mail.com",
      registrationDate: "03 Jul 2024, 10:30 AM",
      kyc: "Verified",
    },
    {
      name: "Carnegie Mellon",
      phone: "+1 7654 455 890",
      email: "Carnegie@mail.com",
      registrationDate: "01 Jan 2024, 04:40 PM",
      kyc: "Not verified",
    },
    {
      name: "John Mick",
      phone: "+1 1897 455 890",
      email: "Johnmick@mail.com",
      registrationDate: "23 Feb 2024, 12:12 PM",
      kyc: "Verified",
    }, {
      name: "Peter Thiel",
      phone: "+1 3245 455 890",
      email: "Peter@mail.com",
      registrationDate: "12 Aug 2023, 09:30 PM",
      kyc: "Verified",
    },
    {
      name: "Blake Ricky",
      phone: "+1 2134 455 890",
      email: "Blake@mail.com",
      registrationDate: "23 Mar 2024, 11:21 AM",
      kyc: "Verified",
    },
    {
      name: "Randy Pausch",
      phone: "+1 4321 455 890",
      email: "Randy@mail.com",
      registrationDate: "21 Apr 2024, 01:59 PM",
      kyc: "Not verified",
    },
    {
      name: "Jeffrey Zaslow",
      phone: "+1 3789 455 890",
      email: "Jeffrey@mail.com",
      registrationDate: "03 Jul 2024, 10:30 AM",
      kyc: "Verified",
    },
    {
      name: "Carnegie Mellon",
      phone: "+1 7654 455 890",
      email: "Carnegie@mail.com",
      registrationDate: "01 Jan 2024, 04:40 PM",
      kyc: "Not verified",
    },
    {
      name: "John Mick",
      phone: "+1 1897 455 890",
      email: "Johnmick@mail.com",
      registrationDate: "23 Feb 2024, 12:12 PM",
      kyc: "Verified",
    }, {
      name: "Peter Thiel",
      phone: "+1 3245 455 890",
      email: "Peter@mail.com",
      registrationDate: "12 Aug 2023, 09:30 PM",
      kyc: "Verified",
    },
    {
      name: "Blake Ricky",
      phone: "+1 2134 455 890",
      email: "Blake@mail.com",
      registrationDate: "23 Mar 2024, 11:21 AM",
      kyc: "Verified",
    },
    {
      name: "Randy Pausch",
      phone: "+1 4321 455 890",
      email: "Randy@mail.com",
      registrationDate: "21 Apr 2024, 01:59 PM",
      kyc: "Not verified",
    },
    {
      name: "Jeffrey Zaslow",
      phone: "+1 3789 455 890",
      email: "Jeffrey@mail.com",
      registrationDate: "03 Jul 2024, 10:30 AM",
      kyc: "Verified",
    },
    {
      name: "Carnegie Mellon",
      phone: "+1 7654 455 890",
      email: "Carnegie@mail.com",
      registrationDate: "01 Jan 2024, 04:40 PM",
      kyc: "Not verified",
    },
    {
      name: "John Mick",
      phone: "+1 1897 455 890",
      email: "Johnmick@mail.com",
      registrationDate: "23 Feb 2024, 12:12 PM",
      kyc: "Verified",
    }, {
      name: "Peter Thiel",
      phone: "+1 3245 455 890",
      email: "Peter@mail.com",
      registrationDate: "12 Aug 2023, 09:30 PM",
      kyc: "Verified",
    },
    {
      name: "Blake Ricky",
      phone: "+1 2134 455 890",
      email: "Blake@mail.com",
      registrationDate: "23 Mar 2024, 11:21 AM",
      kyc: "Verified",
    },
    {
      name: "Randy Pausch",
      phone: "+1 4321 455 890",
      email: "Randy@mail.com",
      registrationDate: "21 Apr 2024, 01:59 PM",
      kyc: "Not verified",
    },
    {
      name: "Jeffrey Zaslow",
      phone: "+1 3789 455 890",
      email: "Jeffrey@mail.com",
      registrationDate: "03 Jul 2024, 10:30 AM",
      kyc: "Verified",
    },
    {
      name: "Carnegie Mellon",
      phone: "+1 7654 455 890",
      email: "Carnegie@mail.com",
      registrationDate: "01 Jan 2024, 04:40 PM",
      kyc: "Not verified",
    },
    {
      name: "John Mick",
      phone: "+1 1897 455 890",
      email: "Johnmick@mail.com",
      registrationDate: "23 Feb 2024, 12:12 PM",
      kyc: "Verified",
    }, {
      name: "Peter Thiel",
      phone: "+1 3245 455 890",
      email: "Peter@mail.com",
      registrationDate: "12 Aug 2023, 09:30 PM",
      kyc: "Verified",
    },
    {
      name: "Blake Ricky",
      phone: "+1 2134 455 890",
      email: "Blake@mail.com",
      registrationDate: "23 Mar 2024, 11:21 AM",
      kyc: "Verified",
    },
    {
      name: "Randy Pausch",
      phone: "+1 4321 455 890",
      email: "Randy@mail.com",
      registrationDate: "21 Apr 2024, 01:59 PM",
      kyc: "Not verified",
    },
    {
      name: "Jeffrey Zaslow",
      phone: "+1 3789 455 890",
      email: "Jeffrey@mail.com",
      registrationDate: "03 Jul 2024, 10:30 AM",
      kyc: "Verified",
    },
    {
      name: "Carnegie Mellon",
      phone: "+1 7654 455 890",
      email: "Carnegie@mail.com",
      registrationDate: "01 Jan 2024, 04:40 PM",
      kyc: "Not verified",
    },
    {
      name: "John Mick",
      phone: "+1 1897 455 890",
      email: "Johnmick@mail.com",
      registrationDate: "23 Feb 2024, 12:12 PM",
      kyc: "Verified",
    }, {
      name: "Peter Thiel",
      phone: "+1 3245 455 890",
      email: "Peter@mail.com",
      registrationDate: "12 Aug 2023, 09:30 PM",
      kyc: "Verified",
    },
    {
      name: "Blake Ricky",
      phone: "+1 2134 455 890",
      email: "Blake@mail.com",
      registrationDate: "23 Mar 2024, 11:21 AM",
      kyc: "Verified",
    },
    {
      name: "Randy Pausch",
      phone: "+1 4321 455 890",
      email: "Randy@mail.com",
      registrationDate: "21 Apr 2024, 01:59 PM",
      kyc: "Not verified",
    },
    {
      name: "Jeffrey Zaslow",
      phone: "+1 3789 455 890",
      email: "Jeffrey@mail.com",
      registrationDate: "03 Jul 2024, 10:30 AM",
      kyc: "Verified",
    },
    {
      name: "Carnegie Mellon",
      phone: "+1 7654 455 890",
      email: "Carnegie@mail.com",
      registrationDate: "01 Jan 2024, 04:40 PM",
      kyc: "Not verified",
    },
    {
      name: "John Mick",
      phone: "+1 1897 455 890",
      email: "Johnmick@mail.com",
      registrationDate: "23 Feb 2024, 12:12 PM",
      kyc: "Verified",
    }, {
      name: "Peter Thiel",
      phone: "+1 3245 455 890",
      email: "Peter@mail.com",
      registrationDate: "12 Aug 2023, 09:30 PM",
      kyc: "Verified",
    },
    {
      name: "Blake Ricky",
      phone: "+1 2134 455 890",
      email: "Blake@mail.com",
      registrationDate: "23 Mar 2024, 11:21 AM",
      kyc: "Verified",
    },
    {
      name: "Randy Pausch",
      phone: "+1 4321 455 890",
      email: "Randy@mail.com",
      registrationDate: "21 Apr 2024, 01:59 PM",
      kyc: "Not verified",
    },
    {
      name: "Jeffrey Zaslow",
      phone: "+1 3789 455 890",
      email: "Jeffrey@mail.com",
      registrationDate: "03 Jul 2024, 10:30 AM",
      kyc: "Verified",
    },
    {
      name: "Carnegie Mellon",
      phone: "+1 7654 455 890",
      email: "Carnegie@mail.com",
      registrationDate: "01 Jan 2024, 04:40 PM",
      kyc: "Not verified",
    },
    {
      name: "John Mick",
      phone: "+1 1897 455 890",
      email: "Johnmick@mail.com",
      registrationDate: "23 Feb 2024, 12:12 PM",
      kyc: "Verified",
    },
  ];

  const rentedCarsTableData = [
    {
      image: ` ${DemoCar}`,
      ownerName: "John Abram #Owner ID1234",
      car: "Kia Saltos DL_5Q-7578",
      documentation: "Done",
      "Total Revenue": "+F.CFA 380",
      Status: "Available"
    },
    {
      image: ` ${DemoCar}`,
      ownerName: "Jane Doe #Owner ID5678",
      car: "Toyota Corolla DL_6R-1234",
      documentation: "Pending",
      "Total Revenue": "-F.CFA 150",
      Status: "Rented"
    },
    {
      image: ` ${DemoCar}`,
      ownerName: "Mike Ross #Owner ID2345",
      car: "Honda Civic DL_7T-5687",
      documentation: "Done",
      "Total Revenue": "+F.CFA 500",
      Status: "Available"
    },
    {
      image: ` ${DemoCar}`,
      ownerName: "Sarah Miller #Owner ID6789",
      car: "Ford Mustang DL_8U-2435",
      documentation: "Done",
      "Total Revenue": "-F.CFA 200",
      Status: "Rented"
    },
    {
      image: ` ${DemoCar}`,
      ownerName: "Tom Cruise #Owner ID5678",
      car: "BMW X5 DL_3A-4512",
      documentation: "Pending",
      "Total Revenue": "+F.CFA 620",
      Status: "Available"
    },
    {
      image: ` ${DemoCar}`,
      ownerName: "John Abram #Owner ID1234",
      car: "Kia Saltos DL_5Q-7578",
      documentation: "Done",
      "Total Revenue": "+F.CFA 380",
      Status: "Available"
    },
    {
      image: ` ${DemoCar}`,
      ownerName: "Jane Doe #Owner ID5678",
      car: "Toyota Corolla DL_6R-1234",
      documentation: "Pending",
      "Total Revenue": "-F.CFA 150",
      Status: "Rented"
    },
    {
      image: ` ${DemoCar}`,
      ownerName: "Mike Ross #Owner ID2345",
      car: "Honda Civic DL_7T-5687",
      documentation: "Done",
      "Total Revenue": "+F.CFA 500",
      Status: "Available"
    },
    {
      image: ` ${DemoCar}`,
      ownerName: "Sarah Miller #Owner ID6789",
      car: "Ford Mustang DL_8U-2435",
      documentation: "Done",
      "Total Revenue": "-F.CFA 200",
      Status: "Rented"
    },
    {
      image: ` ${DemoCar}`,
      ownerName: "Tom Cruise #Owner ID5678",
      car: "BMW X5 DL_3A-4512",
      documentation: "Pending",
      "Total Revenue": "+F.CFA 620",
      Status: "Available"
    },
    {
      image: ` ${DemoCar}`,
      ownerName: "John Abram #Owner ID1234",
      car: "Kia Saltos DL_5Q-7578",
      documentation: "Done",
      "Total Revenue": "+F.CFA 380",
      Status: "Available"
    },
    {
      image: ` ${DemoCar}`,
      ownerName: "Jane Doe #Owner ID5678",
      car: "Toyota Corolla DL_6R-1234",
      documentation: "Pending",
      "Total Revenue": "-F.CFA 150",
      Status: "Rented"
    },
    {
      image: ` ${DemoCar}`,
      ownerName: "Mike Ross #Owner ID2345",
      car: "Honda Civic DL_7T-5687",
      documentation: "Done",
      "Total Revenue": "+F.CFA 500",
      Status: "Available"
    }
  ];


  return (
    <>
      <div className='dashboard'>
        <h1>Dashboard</h1>
        <h3>Welcome!!</h3>
      </div>

      <div className='flexRow total_counts_wrapper'>
        <TotalCounts icon={TotalUsers} name={"Total Users"} count={"12,750"} />
        <TotalCounts icon={TotalDrivers} name={"Total Drivers"} count={"7,920"} />
        <TotalCounts icon={TotalHosts} name={"Total Hosts"} count={"3,460"} />
        <TotalCounts icon={TotalBookings} name={"Total Bookings"} count={"5,600"} />
      </div>

      <div>
        <HomeCharts />
      </div>
      <div>
        {/* <DataTable data={tableData} rowsPerPage={4}/> */}

        <TableUI data={tableData} rowsPerPage={5} />
      </div>


      <div>
        <h1 className='table__heading'>Most Popular Rental Cars </h1>
        <RentedCardTableData data={rentedCarsTableData} rowsPerPage={5} />
      </div>
    </>
  )
}
