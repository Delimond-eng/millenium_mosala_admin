<template>
	<div
		class="echo group bg-gradient-to-b from-slate-200/70 to-slate-50 background relative min-h-screen before:content-[''] before:h-[370px] before:w-screen before:bg-gradient-to-t before:from-theme-1/80 before:to-theme-2 [&.background--hidden]:before:opacity-0 before:transition-[opacity,height] before:ease-in-out before:duration-300 before:top-0 before:fixed after:content-[''] after:h-[370px] after:w-screen [&.background--hidden]:after:opacity-0 after:transition-[opacity,height] after:ease-in-out after:duration-300 after:top-0 after:fixed after:bg-texture-white after:bg-contain after:bg-fixed after:bg-[center_-13rem] after:bg-no-repeat">
		<div
			class="side-menu xl:ml-0 shadow-xl transition-[margin,padding] duration-300 xl:shadow-none fixed top-0 left-0 z-50 group inset-y-0 xl:py-3.5 xl:pl-3.5 after:content-[''] after:fixed after:inset-0 after:bg-black/80 after:xl:hidden side-menu--collapsed [&.side-menu--mobile-menu-open]:ml-0 [&.side-menu--mobile-menu-open]:after:block -ml-[275px] after:hidden">
			<div
				class="close-mobile-menu fixed ml-[275px] w-10 h-10 items-center justify-center xl:hidden z-50 [&.close-mobile-menu--mobile-menu-open]:flex hidden">
				<a class="ml-5 mt-5" href="#">
					<i data-tw-merge="" data-lucide="x" class="stroke-[1] h-8 w-8 text-white"></i>
				</a>
			</div>
			<!-- Sidemenu -->

			<sidemenu-layout></sidemenu-layout>

			<!-- End sidemenu -->


			<!-- Top bar -->
			<topbar-layout></topbar-layout>
			<!-- End Top bar -->
		</div>
		<!-- page content -->
		<dashboard-page></dashboard-page>
		<!-- end page content -->
	</div>
</template>

<script>
import SidemenuLayout from '@/components/layouts/sidebar_layout'
import TopbarLayout from '@/components/layouts/topbar_layout'
import DashboardPage from '@/pages/dashboard_page';
export default {
	name: 'App',
	components: {
		SidemenuLayout,
		TopbarLayout,
		DashboardPage
	}
}
</script>


