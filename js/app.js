document.addEventListener('DOMContentLoaded', () => {
	const tabs = document.querySelectorAll('.tab-btn')
	const tabContents = document.querySelectorAll('.tab-content')

	tabs.forEach(tab => {
		tab.addEventListener('click', () => {
			tabs.forEach(innerTab => {
				innerTab.classList.remove('tab-btn_active')
			})
			tab.classList.add('tab-btn_active')

			tabContents.forEach(content => {
				content.classList.remove('tab-content_active')
			})
			const activeTabContent = document.getElementById(tab.dataset.target)
			activeTabContent.classList.add('tab-content_active')
		})
	})
})
