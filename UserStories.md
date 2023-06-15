# User Stories:

- [ ] As a tiffin service provider, I want to be able to enter details of client.
- [ ] As a tiffin service provider, I want to be able to manage delivery addresses.
- [ ] As a tiffin service provider, I want to assign drivers to specific delivery addresses.
- [ ] As a driver, I want to view a list of assigned delivery addresses.
- [ ] As a driver, I want to click a picture and upload it for each delivery address.
- [ ] As a user, I want to see the delivery address on a map (Google Maps or Apple Maps).
- [ ] As a user, I want to copy the delivery address for easy reference.
- [ ] As a user, I want to view the contact details (phone number and name) of the person receiving the delivery.
- [ ] As a user, I want to receive a WhatsApp message with the delivery address and the picture uploaded by the driver.
- [ ] As an administrator, I want to ensure secure access with password authentication.

## Objects

1. ### Tiffin Service Providers
- [ ] A tiffin service provider should have a name(string), address(string), phone number(number), restuarantid(key) and menu(json)
- [ ] A menu should have a list of meal
- [ ] A meal should have name, content, and cost
- [ ] A tiffin service provider should have a list of drivers and should be able to assign Manifest to a drivers
- [ ] A tiffin service provider should be able to CRUD drivers

1. ### Drivers
- [ ] A driver should have name(string), phone number (number), Manifest (List of deliveryDetails)
- [ ] A Manifest should have 
    - Date
    - list of { address (string) ,  Order (List)}
- [ ] An Order should have a phone number(number), name (string), a list of meals, media (image) and status (Pending/delivered/Other)

1. ### Administrators
- [ ] An Admin should have access to everything
- [ ] An Admin should be able to create, read, update and delete anything


