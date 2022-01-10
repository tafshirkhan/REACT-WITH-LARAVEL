@extends('Admin.Admin_Master')
@section('admin')

    <div class="content-body" style="min-height: 884px;">
        <div class="container-fluid">
            <!-- Add Project -->
            @php
                $id = Auth::user()->id;
                $user = App\Models\User::find($id);
                
            @endphp
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
                            <h4 class="card-title">Edit Details</h4>
                        </div>
                        <div class="card-body">
                            <div class="basic-form">
                                <form method="post" action="{{ route('update.details', $data->id) }}">
                                    @csrf
                                    <div class="form-group">
                                        <label class="info-title">About</label>
                                        <textarea class="form-control" name="about" id="summernote1">
                                                            {{ $data->about }}
                                                        </textarea>
                                    </div>
                                    <div class="form-group">
                                        <label class="info-title">Refund Policy</label>
                                        <textarea class="form-control" name="refund_policy" id="summernote2">
                                                            {{ $data->refund_policy }}
                                                        </textarea>
                                    </div>
                                    <div class="form-group">
                                        <label class="info-title">Terms</label>
                                        <textarea class="form-control" name="terms" id="summernote3">
                                                            {{ $data->terms }}
                                                        </textarea>
                                    </div>
                                    <div class="form-group">
                                        <label class="info-title">Privacy</label>
                                        <textarea class="form-control" name="privacy" id="summernote4">
                                                            {{ $data->privacy }}
                                                        </textarea>
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

    <!-- summernote css/js -->
    <link href="https://cdn.jsdelivr.net/npm/summernote@0.8.18/dist/summernote-bs4.min.css" rel="stylesheet">
    <script src="https://cdn.jsdelivr.net/npm/summernote@0.8.18/dist/summernote-bs4.min.js"></script>
    <script type="text/javascript">
        $('#summernote1').summernote({
            height: 400
        });
    </script>
    <script type="text/javascript">
        $('#summernote2').summernote({
            height: 400
        });
    </script>
    <script type="text/javascript">
        $('#summernote3').summernote({
            height: 400
        });
    </script>
    <script type="text/javascript">
        $('#summernote4').summernote({
            height: 400
        });
    </script>

@endsection
