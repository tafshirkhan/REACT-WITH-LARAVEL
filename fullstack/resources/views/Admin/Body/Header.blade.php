<div class="nav-header">
    <a href="index.html" class="brand-logo">
        <h5>REACT-LARAVEL</h5>
    </a>

    <div class="nav-control">
        <div class="hamburger">
            <span class="line"></span><span class="line"></span><span class="line"></span>
        </div>
    </div>
</div>
<!--**********************************
            Header start
        ***********************************-->
<div class="header">
    <div class="header-content">
        <nav class="navbar navbar-expand">
            <div class="collapse navbar-collapse justify-content-between">
                <div class="header-left">
                    <div class="input-group search-area right d-lg-inline-flex d-none">
                        <input type="text" class="form-control" placeholder="Find something here...">
                        <div class="input-group-append">
                            <span class="input-group-text"><a href="javascript:void(0)"><i
                                        class="flaticon-381-search-2"></i></a></span>
                        </div>
                    </div>
                </div>
                <ul class="navbar-nav header-right main-notification">
                    @php
                        $id = Auth::user()->id;
                        $user = App\Models\User::find($id);
                    @endphp



                    <li class="nav-item dropdown header-profile">
                        <a href="{{ route('admin.logout') }}">
                            <svg id="icon-logout" class="text-danger" width="18" height="18" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round">
                                <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                                <polyline points="16 17 21 12 16 7"></polyline>
                                <line x1="21" y1="12" x2="9" y2="12"></line>
                            </svg>

                            <span class="ml-2">Logout </span>
                        </a>
                        <a class="nav-link" href="#" role="button" data-toggle="dropdown">
                            <img id="showImage"
                                src="{{ !empty($user->profile_photo_path) ? url('upload/profile_images/' . $user->profile_photo_path) : url('upload/no_image.jpg') }}"
                                class="img-fluid rounded-circle" style="width: 50px; height:50px;">
                            <div class="header-info">
                                <span>{{ $user->name }}</span>
                                <small>Admin <br> {{ $user->email }}</small>
                            </div>
                        </a>



                        {{-- <div class="dropdown-menu dropdown-menu-right">
                            <a href="./app-profile.html" class="dropdown-item ai-icon">
                                <svg id="icon-user1" xmlns="http://www.w3.org/2000/svg" class="text-primary"
                                    width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                                    <circle cx="12" cy="7" r="4"></circle>
                                </svg>
                                <span class="ml-2">Profile </span>
                            </a>



                            <a href="{{ route('admin.logout') }}" class="dropdown-item ai-icon">
                                <svg id="icon-logout" xmlns="http://www.w3.org/2000/svg" class="text-danger"
                                    width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                                    <polyline points="16 17 21 12 16 7"></polyline>
                                    <line x1="21" y1="12" x2="9" y2="12"></line>
                                </svg>
                                <span class="ml-2">Logout </span>
                            </a>
                        </div> --}}

                    </li>
                </ul>
            </div>
        </nav>
    </div>
</div>
