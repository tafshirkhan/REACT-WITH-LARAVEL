<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Auth;
use App\Models\User;
use Illuminate\Support\Facades\Hash;


class AdminUserController extends Controller
{
    public function AdminLogout(){
        //checking authentic user
        Auth::logout();//default
        return Redirect()->route('login');//default route
    }

    public function UserProfile(){
        $id = Auth::user()->id;
        $user = User::find($id);

        return view('Backend.userprofile',compact('user'));
    }

    public function UserProfileEdit(){
        $id = Auth::user()->id;
        $user = User::find($id);

        return view('Backend.userprofile_edit', compact('user'));
    }

    public function UserProfileStoreData(Request $req){
        $data = Auth::user()->id;
        $user = User::find($data);
        $user->name = $req->name;
        $user->email = $req->email;

        if($req->file('profile_photo_path')){
            $file = $req->file('profile_photo_path');
            @unlink(public_path('upload/profile_images/'.$user->profile_photo_path));
            $filename = date('YmdHi').$file->getClientOriginalName();
            $file->move(public_path('upload/profile_images'),$filename);
            $user['profile_photo_path'] = $filename;
        }
        $user->save();
        $alert = array(
            'message' => 'Profile updated successful',
            'alert-type' => 'success'
        );

        return Redirect()->route('user.profile')->with($alert);
        

    }

    public function ChangesPassword(){
        $id = Auth::user()->id;
        $user = User::find($id);

        return view('Backend.changes_password',compact('user'));
    }

    public function UpdatePassword(Request $req){
        $validation = $req->validate([
            'current_password' => 'required',
             "new_password" => 'required|confirmed'

        ]);

        $HashPass = Auth::user()->password;
        //checking with old password whether it exist or not.
        if(Hash::check($req->current_password, $HashPass)){
            // $id = Auth::user()->id;
            // $user = User::find($id); 
            //OR
            $user = User::find(Auth::id());
            $user->password = Hash::make($req->new_password);
            $user->save();
            Auth::logout();
            return Redirect()->route('admin.logout');
            
        }
        else{
            return Redirect()->back();
        }

    }
}
