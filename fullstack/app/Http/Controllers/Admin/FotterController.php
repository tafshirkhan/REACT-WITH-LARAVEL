<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Fotter;

class FotterController extends Controller
{
    public function AllSelect(){
        $result = Fotter::all();
        return $result;
    }

    public function ViewAllFooterData(){
        $data = Fotter::all();

        return view('Backend.Footer.view_all',compact('data'));
    }

    public function AddNewFooter(){
        return view('Backend.Footer.add_new');

    }

    public function FooterStore(Request $req){
        $req->validate([
            'address'=>'required',
            'email'=>'required',
            'phone'=>'required',
            'facebook'=>'required',
            'youtube'=>'required',
            'instagram'=>'required',
            'twitter'=>'required',
            'credit'=>'required',
        ]);

        Fotter::insert([
            'address'=>$req->address,
            'email'=>$req->email,
            'phone'=>$req->phone,
            'facebook'=>$req->facebook,
            'youtube'=>$req->youtube,
            'instagram'=>$req->instagram,
            'twitter'=>$req->twitter,
            'credit'=>$req->credit,
        ]);

        $alert = array(
            'message'=>"Inserted successful",
            'alert-type'=>"success",
        );

        return Redirect()->route('all.footer_data')->with($alert);
    }

    public function EditFooter($id){
        $data = Fotter::findOrFail($id);

        return view('Backend.Footer.edit_footer',compact('data'));
    }

   public function UpdateFooter(Request $req){
       $footerId = $req->id;

       Fotter::findOrFail($footerId)->update([
            'address'=>$req->address,
            'email'=>$req->email,
            'phone'=>$req->phone,
            'facebook'=>$req->facebook,
            'youtube'=>$req->youtube,
            'instagram'=>$req->instagram,
            'twitter'=>$req->twitter,
            'credit'=>$req->credit,
            
            ]);

             $alert = array(
            'message'=>"Updated successful",
            'alert-type'=>'success'
             );
             return Redirect()->route('all.footer_data')->with($alert);
   }

   public function DeleteFooter($id){
       Fotter::findOrFail($id)->delete();
       
       $alert = array(
            'message'=>"Deleted successful",
            'alert-type'=>'warning'
             );
       return Redirect()->route('all.footer_data')->with($alert);


       
   }
}
