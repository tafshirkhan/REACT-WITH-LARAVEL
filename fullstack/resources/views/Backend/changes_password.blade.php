@extends('Admin.Admin_Master')
@section('admin')



    <div class="content-body" style="min-height: 884px;">
        <div class="container-fluid">
            <!-- Add Project -->

            <div class="row page-titles mx-0">
                <div class="col-sm-6 p-md-0">
                    <div class="welcome-text">
                        <h4>{{ $user->name }} welcome </h4>
                        <span>Owner</span>
                    </div>
                </div>
                <div class="col-sm-6 p-md-0 justify-content-sm-end mt-2 mt-sm-0 d-flex">

                </div>
            </div>
            <!-- row -->
            <div class="row">
                <div class="col-xl-12 col-lg-12">
                    <div class="card">
                        <div class="card-header">
                            <h4 class="card-title">Changes Password</h4>
                        </div>
                        <div class="card-body">
                            <div class="basic-form">
                                <form method="post" action="{{ route('user.profile.updatepassword') }}">
                                    @csrf
                                    <div class="form-group">
                                        <input type="password" id="current_password" name="current_password"
                                            class="form-control input-default " placeholder="Current password">
                                    </div>

                                    <div class="form-group">
                                        <input type="password" id="password" name="new_password"
                                            class="form-control input-default " placeholder="New password">
                                    </div>

                                    <div class="form-group">
                                        <input type="password" id="password_confirmation" name="confirm_password"
                                            class="form-control input-default " placeholder="Confirm password">
                                    </div>
                                    <input type="submit" class="btn light btn-success" value="Changes">

                                </form>
                            </div>
                        </div>
                    </div>
                </div>





            </div>
        </div>
    </div>



@endsection
