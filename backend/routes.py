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
    contact = Contact.query.get_or_404(id)  
    data = request.json  

   
    contact.name = data.get('name', contact.name)  
    contact.email = data.get('email', contact.email)  
    contact.phone = data.get('phone', contact.phone) 

    db.session.commit()  
    return jsonify({'message': 'Contact updated!'}), 200  
