Personal Mobile App Project Final


About the app:

Users can browse and purchase tickets for a variety of events, including concerts, parties, and art exhibits, with this React Native app. The application features a menu with classified event options that is easy to use. The software allows users to choose an event category and then dynamically presents all of the events that fall into that category along with their names, dates, hours, costs, and the quantity of tickets that are still available. Users can reserve tickets for an event by choosing it, which opens a payment mode where they can enter their card information to finalize the transaction. To ensure accurate payment processing, the app also includes card number, expiration date, and CVV validation. Users receive a notice verifying their booking as soon as payment is approved, and the number of tickets available for the chosen event is subsequently reduced. All things considered, this app offers consumers a practical and effective way to find, investigate, and reserve tickets for a range of events.


About the code:

This React Native code snippet creates an event booking application by utilizing a number of important coding concepts and approaches. 
First, component-level state is managed by using React's `useState` hook in conjunction with functional components. As a result, efficient re-renders and dynamic changes depending on user interactions are possible. The application creates an interactive and aesthetically pleasing user interface by using React Native's built-in components, including {View}, {Text{, {TouchableOpacity}, `StyleSheet{, {ImageBackground}, {Modal}, {TextInput{, and `Image}. The `StyleSheet.create` technique is utilized to style these components, guaranteeing codebase uniformity and comprehensibility. {onPress} handlers support event handling, allowing users to choose event categories, reserve tickets, and validate payments. Regular expressions (`Regex`) are used in input validation to make sure that user-supplied data, like card numbers, expiration dates, and CVV numbers, follow predefined standards. Using arrays to manage ticket counts ({ticketCounts}) for several event types is essential. Accurate tracking of ticket availability is ensured by the dynamic updating of this array, which contains the number of available tickets for each event when users book them. Furthermore, the program makes use of {Modal` components to show payment confirmation dialogs, giving users an easy-to-use interface through which to complete their transactions.
All things considered, this code shows how to combine React Native's features and best practices to produce an event booking app that is both useful and easy to use.


Screenshots to demonstrate the app:

![Party events](./Screenshots/App1.png)
![Concert events](./Screenshots/App2.png)
![Art events](./Screenshots/App3.png)
![payment page](./Screenshots/App4.png)
![Card Details](./Screenshots/App5.png)
![Payment confirmed](./Screenshots/App6.png)
![Invalid card number](./Screenshots/App7.png)
![Invalid expiry date](./Screenshots/App8.png)
![Invalid CVV](./Screenshots/App9.png)
![Tickets unavailable](./Screenshots/App10.png)

