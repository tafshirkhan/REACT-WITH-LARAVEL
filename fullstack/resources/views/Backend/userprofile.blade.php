@extends('Admin.Admin_Master')
@section('admin')

    <div class="content-body" style="min-height: 884px;">
        <div class="container-fluid">
            <!-- Add Project -->


            <div class="row page-titles mx-0">
                <div class="col-sm-6 p-md-0">
                    <div class="welcome-text">
                        <h4>Hi, welcome back!</h4>
                        <p class="mb-0">REACT-WITH LARAVEL</p>
                    </div>
                </div>
                <div class="col-sm-6 p-md-0 justify-content-sm-end mt-2 mt-sm-0 d-flex">

                </div>
            </div>

            <!-- row -->
            <div class="row">
                <div class="col-lg-12">
                    <div class="profile card card-body px-3 pt-3 pb-0">
                        <div class="profile-head">
                            <div class="photo-content">

                            </div>
                            <div class="profile-info">
                                <div class="profile-photo">
                                    <img src="{{ !empty($user->profile_photo_path) ? url('upload/profile_images/' . $user->profile_photo_path) : url('upload/no_image.jpg') }}"
                                        class="img-fluid rounded-circle" alt="">
                                </div>
                                <div class="profile-details">
                                    <div class="profile-name px-3 pt-2">
                                        <h4 class="text-primary mb-0">{{ $user->name }}</h4>
                                        <p>User Name</p>
                                    </div>
                                    <div class="profile-email px-2 pt-2">
                                        <h4 class="text-muted mb-0">{{ $user->email }}</h4>
                                        <p>Email</p>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <a href="{{ route('user.profile.edit') }}" class="btn btn-outline-primary">Edit Profile</a>



        </div>
    </div>

@endsection
