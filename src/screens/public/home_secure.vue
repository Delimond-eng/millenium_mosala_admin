<template>
    <div id="layout-wrapper">
        <!-- top menu -->
        <topbar-layout />
        <!-- ::top menu -->

        <!-- side menu -->
        <sidemenu-layout />
        <!-- ::side menu -->

        <!-- Vertical Overlay-->
        <div class="vertical-overlay"></div>

        <!-- ============================================================== -->
        <!-- Start right Content here -->
        <!-- ============================================================== -->
        <div class="main-content">

            <!-- Start router view -->
            <router-view />
            <!--  End router viewer -->
            <!-- Begin footer -->
            <footer class="footer">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-sm-6">
                            © Millenium horizon.
                        </div>
                        <div class="col-sm-6">
                            <div class="text-sm-end d-none d-sm-block">
                                Kinshasa RDC
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <!-- End footer -->
        </div>
        <!-- end main content-->

    </div>
    <!-- END layout-wrapper -->

    <!--start back-to-top-->
    <button onclick="topFunction()" class="btn btn-danger btn-icon" id="back-to-top">
        <i class="ri-arrow-up-line"></i>
    </button>
    <!--end back-to-top-->

    <!--preloader-->
    <div id="preloader">
        <div id="status">
            <div class="spinner-border text-primary avatar-sm" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
        </div>
    </div>
</template>

<script>
import SidemenuLayout from '@/components/layouts/sidebar_layout'
import TopbarLayout from '@/components/layouts/topbar_layout'
export default {
    name: 'HomeSecure',
    components: {
        SidemenuLayout,
        TopbarLayout
    }
}
</script>
