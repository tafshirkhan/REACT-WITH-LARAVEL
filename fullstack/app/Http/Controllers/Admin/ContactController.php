<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Contact;

class ContactController extends Controller
{
    public function PostContact(Request $req){
        $ContactsArray = json_decode($req->getContent(),true);

        $name = $ContactsArray['name'];
        $email = $ContactsArray['email'];
        $message = $ContactsArray['message'];

        $allresult = Contact::insert([
            // 'name'=>$req->name,
            // 'email'=>$req->email,
            // 'message'=>$req->message,
            'name'=>$name,
            'email'=>$email,
            'message'=>$message,
            
        ]);

        if($allresult == true){
            return 1;
        }else{
            return 0;
        }

    }

    public function ViewAllContactData(){
        $data = Contact::all();

        return view('Backend.Contact.view_contact',compact('data'));
    }

    public function DeleteContactData($id){
        Contact::findOrFail($id)->delete();

        $alert = array(
            'message'=>"Deleted successful",
            'alert-type'=>"warning",
        );
        return Redirect()->route('all.contact_data')->with($alert);
    }
}
