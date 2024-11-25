export default [
  {
    title: 'Home',
    to: { name: 'root' },
    icon: { icon: 'tabler-smart-home' },
  },
  {
    title: 'Second page',
    to: { name: 'admin-second-page' },
    icon: { icon: 'tabler-file' },
  },
  {
    title: 'Third page',
    to: { name: 'admin-third-page' },
    icon: { icon: 'tabler-file' },
  },
  {
    title: 'Calendar',
    icon: { icon: 'tabler-calendar' },
    to: 'calendar',
  },
  {
    title: 'Dashboards',
    icon: { icon: 'tabler-smart-home' },
    children: [
      {
        title: 'Analytics',
        to: 'dashboards-analytics',
      },
      {
        title: 'CRM',
        to: 'dashboards-crm',
      },
      {
        title: 'Ecommerce',
        to: 'dashboards-ecommerce',
      },
    ],
    badgeContent: '5',
    badgeClass: 'bg-error',
  },
  { heading: 'Admin' },
  {
    title: 'Office',
    icon: { icon: 'tabler-calendar' },
    children: [
      { title: 'User Profile', to: { name: 'user-profile-tab', params: { tab: 'profile' } } },
      { title: 'Account Settings', to: { name: 'account-settings-tab', params: { tab: 'account' } } },
    ],
  },
  {
    title: 'Miscellaneous',
    icon: { icon: 'tabler-shopping-cart' },
    children: [
      { title: 'Coming Soon', to: 'misc-coming-soon', target: '_blank' },
      { title: 'Under Maintenance', to: 'misc-under-maintenance', target: '_blank' },
      { title: 'Page Not Found - 404', to: { path: '/misc/not-found' }, target: '_blank' },
      { title: 'Not Authorized - 401', to: { path: '/misc/not-authorized' }, target: '_blank' },
    ],
  },
  {
    title: 'Academy',
    icon: { icon: 'tabler-school' },
    children: [
      { title: 'Dashboard', to: 'academy-dashboard' },
      { title: 'My Course', to: 'academy-my-course' },
      { title: 'Course Details', to: 'academy-course-details' },
    ],
  },
  {
    title: 'Invoice',
    icon: { icon: 'tabler-file-invoice' },
    children: [
      { title: 'List', to: 'invoice-list' },
      { title: 'Preview', to: { name: 'invoice-preview-id', params: { id: '5036' } } },
      { title: 'Edit', to: { name: 'invoice-edit-id', params: { id: '5036' } } },
      { title: 'Add', to: 'invoice-add' },
    ],
  },
]
