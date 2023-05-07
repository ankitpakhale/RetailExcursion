# Retail Excursion - Django React E-commerce Platform with JWT Authentication, Real-time API, and PayPal Integration

## Purpose

Retail Excursion is a full-stack e-commerce project developed using Django and React. It provides a complete solution for managing an online retail store, including user authentication, shopping cart functionality using local storage on the frontend, real-time product availability updates using Redux for API handling, APIs created in Django, and a highly secure PayPal payment gateway integration.

## Features

- User authentication using JWT (JSON Web Tokens).
- Add products to the cart and manage cart items using local storage on the frontend.
- Real-time product availability updates through an API.
- Integration of the highly secure PayPal payment gateway.

## Technologies Used

- Django: A powerful Python web framework used for building the backend.
- React: A JavaScript library used for building the frontend.
- Redux: A predictable state container for JavaScript apps, used for managing the application state and handling API calls.
- JWT: JSON Web Tokens for user authentication.
- Local Storage: To manage the shopping cart on the frontend.
- Real-time API: To receive product availability updates in real-time.
- PayPal: A widely used and highly secure payment gateway.


## Code Structure

The project directory structure is as follows:

- RetailExcursion/
   - backend/                  # Backend code directory
      - settings.py            # Django project settings
      - urls.py                # Django project URLs
   - base/                     # Base app directory
      - urls/                  # URLs directory
         - order_urls.py       # Order-related URLs
         - product_urls.py     # Product-related URLs
         - user_urls.py        # User-related URLs
      - views/                 # Views directory
         - order_views.py      # Order-related views
         - product_views.py    # Product-related views
         - user_views.py       # User-related views
   - frontend/                 # Frontend code directory
      - src/                   # Source code directory
         - actions/            # Redux actions directory
         - components/         # Reusable components directory
         - constants/          # Constants directory
         - reducers/           # Redux reducers directory
         - screens/            # Screen components directory

## Installation

1. Clone the repository:

```
git clone https://github.com/ankitpakhale/RetailExcursion

```

2. Navigate to the project directory:

```
cd retail-excursion

```

3. Set up the backend:

- Create and activate a virtual environment (optional but recommended).
- Install the Python dependencies:

  ```
  pip install -r requirements.txt
  ```

- Set up the database (e.g., SQLite, PostgreSQL) and update the database configuration in `settings.py`.
- Run database migrations:

  ```
  python manage.py migrate
  ```

- Start the backend server:

  ```
  python manage.py runserver
  ```

4. Set up the frontend:

- Navigate to the frontend directory:

  ```
  cd frontend
  ```

- Install the JavaScript dependencies:

  ```
  npm install
  ```

- Start the frontend server:

  ```
  npm start
  ```

5. Access the application in your web browser at [http://localhost:3000](http://localhost:3000).

## Configuration

### Backend Configuration

- Database: You can configure the database settings in `settings.py`. By default, the project uses SQLite as the database.
- JWT: The JWT configuration is located in `settings.py`. You can modify the token expiration time, secret key, and other JWT-related settings.
- API Integration: Configure the real-time API integration by updating the relevant settings in the backend code.
- PayPal Integration: To integrate the PayPal payment gateway, update the PayPal API credentials in the backend code.

### Frontend Configuration

- API Endpoint: In the frontend code, update the API endpoint to connect with the backend server. Update the URL in the appropriate files where API calls are made.
- PayPal Integration: Configure the PayPal integration by updating the relevant settings in the frontend code.
- API Calls using Redux: All APIs are called using Redux. Configure the API endpoints, actions constants, and reducers to handle API requests and responses.

## Contributors

- [Ankit Pakhale](mailto:akp3067@gmail.com).

## Acknowledgements

- [Django](https://www.djangoproject.com/) - The Python web framework used for the backend.
- [React](https://reactjs.org/) - The JavaScript library used for the frontend.
- [JWT](https://jwt.io/) - JSON Web Tokens for user authentication.
- [PayPal](https://www.paypal.com/) - The highly secure payment gateway integrated into the project.

Feel free to modify and enhance this project according to your specific needs. Contributions are welcome!

## License

This project is licensed under the [MIT License](LICENSE). Feel free to modify and use the code as per your requirements.

For more information, please refer to the [license file](LICENSE).

For questions or support, please contact [Ankit Pakhale](mailto:akp3067@gmail.com).

