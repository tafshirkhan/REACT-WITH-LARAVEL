@extends('Admin.Admin_Master')
@section('admin')
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>

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
                            <h4 class="card-title">Edit Data</h4>
                        </div>
                        <div class="card-body">
                            <div class="basic-form">
                                <form method="post" action="{{ route('footer.updatadata') }}">
                                    @csrf

                                    <input type="hidden" name="id" value="{{ $data->id }}">
                                    <div class="form-group">

                                        <label class="info-title">Address</label>
                                        <textarea class="form-control" name="address" rows="4" id="comment">
                                                            {{ $data->address }}</textarea>
                                        @error('address')
                                            <span class="text-danger">{{ $message }}</span>
                                        @enderror
                                    </div>

                                    <div class="form-group">
                                        <label class="info-title">Email</label>
                                        <input type="email" name="email" class="form-control input-default "
                                            placeholder="input-default" value="{{ $data->email }}">
                                        @error('email')
                                            <span class="text-danger">{{ $message }}</span>
                                        @enderror
                                    </div>
                                    <div class="form-group">
                                        <label class="info-title">Phone</label>
                                        <input type="text" name="phone" class="form-control input-default "
                                            placeholder="input-default" value="{{ $data->phone }}">
                                        @error('phone')
                                            <span class="text-danger">{{ $message }}</span>
                                        @enderror
                                    </div>
                                    <div class="form-group">
                                        <label class="info-title">Facebook</label>
                                        <input type="text" name="facebook" class="form-control input-default "
                                            placeholder="input-default" value="{{ $data->facebook }}">
                                        @error('facebook')
                                            <span class="text-danger">{{ $message }}</span>
                                        @enderror
                                    </div>
                                    <div class="form-group">
                                        <label class="info-title">Youtube</label>
                                        <input type="text" name="youtube" class="form-control input-default "
                                            placeholder="input-default" value="{{ $data->youtube }}">
                                        @error('youtube')
                                            <span class="text-danger">{{ $message }}</span>
                                        @enderror
                                    </div>
                                    <div class="form-group">
                                        <label class="info-title">Instagram</label>
                                        <input type="text" name="instagram" class="form-control input-default "
                                            placeholder="input-default" value="{{ $data->instagram }}">
                                        @error('instagram')
                                            <span class="text-danger">{{ $message }}</span>
                                        @enderror
                                    </div>
                                    <div class="form-group">
                                        <label class="info-title">Twitter</label>
                                        <input type="text" name="twitter" class="form-control input-default "
                                            placeholder="input-default" value="{{ $data->twitter }}">
                                        @error('twitter')
                                            <span class="text-danger">{{ $message }}</span>
                                        @enderror
                                    </div>
                                    <div class="form-group">
                                        <label class="info-title">Credit</label>
                                        <input type="text" name="credit" class="form-control input-default "
                                            placeholder="input-default" value="{{ $data->credit }}">
                                        @error('credit')
                                            <span class="text-danger">{{ $message }}</span>
                                        @enderror
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

@endsection
