import os
from flask import Flask, render_template, request, jsonify
from flask_mail import Mail, Message
from dotenv import load_dotenv

# Load environment variables from the .env file
load_dotenv()

app = Flask(__name__)

# Configure Flask-Mail from the environment variables
app.config['SECRET_KEY'] = os.getenv('SECRET_KEY')
app.config['MAIL_SERVER'] = os.getenv('MAIL_SERVER')
app.config['MAIL_PORT'] = int(os.getenv('MAIL_PORT'))
app.config['MAIL_USE_SSL'] = os.getenv('MAIL_USE_SSL').lower() == 'true'
app.config['MAIL_USE_TLS'] = os.getenv('MAIL_USE_TLS').lower() == 'true'
app.config['MAIL_USERNAME'] = os.getenv('MAIL_USERNAME')
app.config['MAIL_PASSWORD'] = os.getenv('MAIL_PASSWORD')
app.config['MAIL_DEFAULT_SENDER'] = os.getenv('MAIL_DEFAULT_SENDER')
RECIPIENT_EMAIL = os.getenv('RECIPIENT_EMAIL')

mail = Mail(app)

@app.route('/')
def home():
    """Renders the main HTML page for the order form."""
    return render_template('index.html')

@app.route('/submit-order', methods=['POST'])
def submit_order():
    """Handles the form submission and sends an email with the order details."""
    try:
        # Get all form data from the POST request
        form_data = request.form

        # Create a human-readable email body
        email_body = "New Order from Website\n\n"
        email_body += "--- General Order Information ---\n"
        email_body += f"Order Type: {form_data.get('order-type')}\n"
        email_body += f"Company / Person Name: {form_data.get('customer_name')}\n"
        email_body += f"Contact Number: {form_data.get('contact_number')}\n"
        email_body += f"Delivery Date: {form_data.get('delivery_date')}\n"
        email_body += f"Description: {form_data.get('description')}\n"
        email_body += f"Note: {form_data.get('note')}\n\n"
        
        # Add a section for product details based on the selected product type
        product_type = form_data.get('product_type')
        if product_type:
            email_body += f"--- Product Details ({product_type.replace('_', ' ').title()}) ---\n"
            for key, value in form_data.items():
                if key not in ['order-type', 'customer_name', 'contact_number', 'delivery_date', 'description', 'note', 'product_type']:
                    # Format keys to be more readable
                    readable_key = key.replace('_', ' ').replace('-', ' ').title()
                    email_body += f"{readable_key}: {value}\n"
                    
        # Create the email message using Flask-Mail's Message class
        msg = Message(
            subject='New Order from Elka Mehr Kimiya Website',
            recipients=[RECIPIENT_EMAIL],
            body=email_body
        )
        
        # Send the email
        mail.send(msg)

        # Return a success response to the JavaScript
        return jsonify({'success': True}), 200

    except Exception as e:
        # Log the error for debugging purposes
        print(f"Error sending email: {e}")
        # Return an error response to the JavaScript
        return jsonify({'success': False, 'message': 'Failed to send email.'}), 500

if __name__ == '__main__':
    app.run(debug=True)