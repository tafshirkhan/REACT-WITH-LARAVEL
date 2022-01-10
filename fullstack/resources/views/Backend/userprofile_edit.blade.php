@extends('Admin.Admin_Master')
@section('admin')
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>


    <div class="content-body" style="min-height: 884px;">
        <div class="container-fluid">
            <!-- Add Project -->

            <div class="row page-titles mx-0">
                <div class="col-sm-6 p-md-0">
                    <div class="welcome-text">
                        <h4>Hi {{ $user->name }} welcome back!</h4>
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
                            <h4 class="card-title">User Details</h4>
                        </div>
                        <div class="card-body">
                            <div class="basic-form">
                                <form method="post" action="{{ route('user.profile.storedata') }}"
                                    enctype="multipart/form-data">
                                    @csrf
                                    <div class="form-group">
                                        <input type="text" name="name" class="form-control input-default "
                                            placeholder="input-default" value="{{ $user->name }}">
                                    </div>
                                    <div class="form-group">
                                        <input type="text" name="email" class="form-control input-default "
                                            placeholder="input-default" value="{{ $user->email }}">
                                    </div>


                                    <div class="input-group mb-3">
                                        <div class="input-group-prepend">
                                            <span class="input-group-text">Upload</span>
                                        </div>
                                        <div class="custom-file">
                                            <input type="file" name="profile_photo_path" class="custom-file-input"
                                                id="image">
                                            <label class="custom-file-label">Choose file</label>

                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <img id="showImage"
                                            src="{{ !empty($user->profile_photo_path) ? url('upload/profile_images/' . $user->profile_photo_path) : url('upload/no_image.jpg') }}"
                                            class="img-fluid rounded-circle" style="width: 100px; height:100px;">
                                    </div>

                                    <input type="submit" class="btn light btn-success" value="Update">

                                </form>
                            </div>
                        </div>
                    </div>
                </div>





            </div>
        </div>
    </div>

    {{-- For uploading image --}}

    <script type="text/javascript">
        $(document).ready(function() {
            $('#image').change(function(e) {
                var read = new FileReader();
                read.onload = function(e) {
                    $('#showImage').attr('src', e.target.result);

                }
                read.readAsDataURL(e.target.files['0']);
            })
        })
    </script>


@endsection
