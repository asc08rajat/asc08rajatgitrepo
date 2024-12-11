package lab;

import java.util.ArrayList;
import java.util.List;

// Base class for Meeting Rooms
class MeetingRoom {
    private String roomId;
    private int capacity;
    private int floor;

    public MeetingRoom(String roomId, int capacity, int floor) {
        this.roomId = roomId;
        this.capacity = capacity;
        this.floor = floor;
    }

    public String getRoomId() {
        return roomId;
    }

    public int getCapacity() {
        return capacity;
    }

    public int getFloor() {
        return floor;
    }

    public String getDetails() {
        return "Room ID: " + roomId + ", Capacity: " + capacity + ", Floor: " + floor;
    }
}

// Subclass for Zoom-enabled Meeting Rooms
class ZoomMeetingRoom extends MeetingRoom {
    private String zoomDeviceId;
    private String zoomAccountId;

    public ZoomMeetingRoom(String roomId, int capacity, int floor, String zoomDeviceId, String zoomAccountId) {
        super(roomId, capacity, floor);
        this.zoomDeviceId = zoomDeviceId;
        this.zoomAccountId = zoomAccountId;
    }

    public String getZoomDetails() {
        return getDetails() + ", Zoom Device ID: " + zoomDeviceId + ", Zoom Account ID: " + zoomAccountId;
    }
}

// Booking class
class Booking {
    private static int bookingCounter = 1; // Auto-generate booking IDs
    private String bookingId;
    private String roomId;
    private String employeeId;
    private String date;
    private String time;
    private int duration;

    public Booking(String roomId, String employeeId, String date, String time, int duration) {
        this.bookingId = "B" + (bookingCounter++);
        this.roomId = roomId;
        this.employeeId = employeeId;
        this.date = date;
        this.time = time;
        this.duration = duration;
    }

    public String getBookingDetails() {
        return "Booking ID: " + bookingId + ", Room ID: " + roomId + ", Employee ID: " + employeeId +
               ", Date: " + date + ", Time: " + time + ", Duration: " + duration + " hours";
    }

    public String getDate() {
        return date;
    }
}

// Employee class
class Employee {
    private String employeeId;
    private String name;

    public Employee(String employeeId, String name) {
        this.employeeId = employeeId;
        this.name = name;
    }

    public String getEmployeeId() {
        return employeeId;
    }

    public void bookMeetingRoom(List<Booking> bookings, String roomId, String date, String time, int duration) {
        bookings.add(new Booking(roomId, employeeId, date, time, duration));
        System.out.println("Booking successful for Employee ID: " + employeeId);
    }

    public void getBookings(List<Booking> bookings, String date) {
        System.out.println("Bookings for Employee ID: " + employeeId + " on Date: " + date);
        for (Booking booking : bookings) {
            if (booking.getDate().equals(date)) {
                System.out.println(booking.getBookingDetails());
            }
        }
    }
}

// Main class
public class MeetingRoomManagement {
    public static void main(String[] args) {
        // Create meeting rooms
        MeetingRoom room1 = new MeetingRoom("R101", 10, 1);
        ZoomMeetingRoom room2 = new ZoomMeetingRoom("R102", 15, 2, "Z12345", "account123");

        // List to store bookings
        List<Booking> bookings = new ArrayList<>();

        // Create employees
        Employee emp1 = new Employee("E001", "John Doe");
        Employee emp2 = new Employee("E002", "Jane Smith");

        // Book meeting rooms
        emp1.bookMeetingRoom(bookings, room1.getRoomId(), "2024-11-25", "10:00 AM", 2);
        emp2.bookMeetingRoom(bookings, room2.getRoomId(), "2024-11-25", "2:00 PM", 1);

        // Display bookings
        emp1.getBookings(bookings, "2024-11-25");
        emp2.getBookings(bookings, "2024-11-25");

        // Display room details
        System.out.println(room1.getDetails());
        System.out.println(room2.getZoomDetails());
    }
}
    
