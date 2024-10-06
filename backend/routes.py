from flask import Blueprint, request, jsonify
from models import Contact
from database import db

api = Blueprint('api', __name__)

@api.route('/contacts', methods=['POST'])
def add_contact():
    data = request.json
    new_contact = Contact(name=data['name'], email=data['email'], phone=data['phone'])
    db.session.add(new_contact)
    db.session.commit()
    return jsonify({'message': 'Contact added!'}), 201

@api.route('/contacts', methods=['GET'])
def get_contacts():
    contacts = Contact.query.all()
    return jsonify([{'id': c.id, 'name': c.name, 'email': c.email, 'phone': c.phone} for c in contacts])

@api.route('/contacts/<int:id>', methods=['DELETE'])
def delete_contact(id):
    contact = Contact.query.get_or_404(id)
    db.session.delete(contact)
    db.session.commit()
    return jsonify({'message': 'Contact deleted!'})

@api.route('/contacts/<int:id>', methods=['PUT'])
def update_contact(id):
    contact = Contact.query.get_or_404(id)  # Get the contact or return a 404 error
    data = request.json  # Get the JSON data from the request

    # Update the contact details
    contact.name = data.get('name', contact.name)  # Update name if provided
    contact.email = data.get('email', contact.email)  # Update email if provided
    contact.phone = data.get('phone', contact.phone)  # Update phone if provided

    db.session.commit()  # Commit the changes to the database
    return jsonify({'message': 'Contact updated!'}), 200  # Return success response
