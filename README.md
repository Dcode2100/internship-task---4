1. I used npx-create-react-app for installing react with its dependencies.
2. For grid layout my approch is to make a card component and by fetching the data in the cardlist component we can pass the data as props to the custom card component that way it will be easy to make it responsive on difference screens.
3. Added a button in navbar which fetches the data when the user clicks it.
4. Added conditional statement to add a loader to do this the better will be to use a custom hook to fetch and add a loader inside that which will create code readiblity and scalibility.
5. I have created the card component as custom styled component which can be used multiple times with different props as required.
6. To make the code cleaner i have used the first solid principal to make small component and then import then in a single parent component.

