<template>
    <div class="app-menu navbar-menu">
        <!-- LOGO -->
        <div class="navbar-brand-box">
            <!-- Dark Logo-->
            <a href="#/home/secure/dashboard" class="logo logo-dark">
                <span class="logo-sm text-white fw-bold fs-18">
                    Mosala<sub>.admin</sub>
                </span>
                <span class="logo-lg">
                    Mosala<sub>.admin</sub>
                </span>
            </a>
            <!-- Light Logo-->
            <a href="#/home/secure/dashboard" class="logo logo-light">
                <span class="logo-sm text-white fw-bold fs-18">
                    Mosala<sub>.admin</sub>
                </span>
                <span class="logo-lg text-white fw-bold fs-18">
                    Mosala<sub>.admin</sub>
                </span>
            </a>
            <button type="button" class="btn btn-sm p-0 fs-20 header-item float-end btn-vertical-sm-hover"
                id="vertical-hover">
                <i class="ri-record-circle-line"></i>
            </button>
        </div>

        <div id="scrollbar">
            <div class="container-fluid">

                <div id="two-column-menu">
                </div>
                <ul class="navbar-nav" id="navbar-nav">
                    <li class="menu-title"><span data-key="t-menu">Menu</span></li>
                    <li class="nav-item active">
                        <a class="nav-link" href="#/home/secure/dashboard">
                            <i class="ri-dashboard-2-line"></i> <span>Tableau de bord</span>
                        </a>
                    </li> <!-- end Dashboard Menu -->
                    <li class="nav-item">
                        <a class="nav-link" href="#/home/secure/candidats">
                            <i class="ri-briefcase-line"></i> <span>Candidats</span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="javascript:void(0)">
                            <i class="ri-suitcase-line"></i> <span>Entreprises</span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#/home/secure/formations">
                            <i class="ri-book-3-line"></i> <span>Formations</span>
                        </a>
                    </li>

                    <!-- end Dashboard Menu -->

                </ul>
            </div>
            <!-- Sidebar -->
        </div>

        <div class="sidebar-background"></div>
    </div>
</template>

<script>
export default {
    name: "SidemenuLayout"
}
</script>
