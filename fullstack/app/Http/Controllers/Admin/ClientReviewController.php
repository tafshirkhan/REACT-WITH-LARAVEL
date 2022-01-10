<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\ClientReview;
use Image;

class ClientReviewController extends Controller
{
    public function AllSelect(){
        //eloquent ORM
        $allresult = ClientReview::all();
        return $allresult;

    }

    public function ViewAllReview(){
        $data = ClientReview::all();

        return view('Backend.ClientReview.all_review',compact('data'));
    }

    public function AddNewReview(){
        return view('Backend.ClientReview.add_review');
    }

    public function ReviewStore(Request $req){
        $req->validate([
            'client_title'=>'required',
            'client_description'=>'required',
            'client_image'=>'required'
        ],[
            'client_title'=>'Name is required',
            'client_description'=>'Description is required'
        ]);

        $image = $req->file('client_image');
        $name_gen = hexdec(uniqid()).'.'.$image->getClientOriginalExtension();
        Image::make($image)->resize(622,550)->save('upload/client_image/'.$name_gen);
        $save_URL = 'http://127.0.0.1:8000/upload/client_image/'.$name_gen;
        ClientReview::insert([
            'client_title'=>$req->client_title,
            'client_description'=>$req->client_description,
            'client_image'=>$save_URL
        ]);

        $alert = array(
            'message'=>"Inserted successgul",
            'alert-type'=>'success'
        );
        return Redirect()->route('all.client_review')->with($alert);

    }

    public function EditClientReview($id){
        $data = ClientReview::findOrFail($id);

        return view('Backend.ClientReview.edit_review',compact('data'));
    }

    public function UpdateReview(Request $req){
        $review = $req->id;

        if($req->file('client_image')){
            $image = $req->file('client_image');
            $name_gen = hexdec(uniqid()).'.'.$image->getClientOriginalExtension();
            Image::make($image)->resize(626,550)->save('upload/client_image/'.$name_gen);
            $save_URL = 'http://127.0.0.1:8000/upload/client_image/'.$name_gen;
           
            ClientReview::findOrFail($review)->update([
            'client_title'=>$req->client_title,
            'client_description'=>$req->client_description,
            'client_image'=>$save_URL
            ]);

            $alert = array(
            'message'=>"Updated successful",
            'alert-type'=>'success'
             );
             return Redirect()->route('all.client_review')->with($alert);

        }
        else{
            ClientReview::findOrFail($review)->update([
            'client_title'=>$req->client_title,
            'client_description'=>$req->client_description,
            
            
            ]);

             $alert = array(
            'message'=>"Updated successful",
            'alert-type'=>'success'
             );
             return Redirect()->route('all.client_review')->with($alert);
        }
    }

    public function DeleteReview($id){
        ClientReview::findOrFail($id)->delete();

         $alert = array(
            'message'=>"Deleted successful",
            'alert-type'=>'warning'
             );
             return Redirect()->route('all.client_review')->with($alert);


    }
}
