import Aura from '@primevue/themes/aura';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      script: [
        {
          src: "https://accounts.google.com/gsi/client",
          async: true,
          defer: true
        }
      ]
    }
  },
  devtools: { enabled: true },
  ssr: false,
  nitro: {
    preset: 'static'
  },
  modules: [
    '@primevue/nuxt-module',
    // '@pinia/nuxt'
  ],
  runtimeConfig: {
    public: {
      PAGE_SIZE: 5,
      PAGE_NUM: 0,
      googleClientId: process.env.VITE_GOOGLE_CLIENT_ID,
      identityApiUrl: process.env.VITE_IDENTITY_API_URL,
      redirectUri: process.env.VITE_REDIRECT_URI
    }
  },
  primevue: {
    usePrimeVue: true,
    components: {
      path: '~/components',
      pathPrefix: false,
      include: ['Button', 'CascadeSelect', 'Checkbox', 'ColorPicker', 'DatePicker', 'Editor',
        'FloatLabel', 'IconField', 'InputIcon', 'InputGroup', 'InputGroupAddon', 'InputNumber', 'InputOtp', 'InputText',
        'Knob', 'Listbox', 'MultiSelect', 'Password', 'RadioButton', 'Rating', 'Select', 'SelectButton', 'Slider', 'Textarea',
        'ToggleButton', 'ToggleSwitch', 'SpeedDial', 'SplitButton', 'DataView', 'OrganizationChart', 'Paginator',
        'Timeline', 'Tree',
        // panel
        'Accordion', 'AccordionPanel', 'AccordionHeader', 'AccordionContent',
        'Card', 'Divider', 'Fieldset', 'Panel', 'ScrollPanel', 'Splitter', 'Toolbar',
        // step
        'Stepper', 'StepList', 'StepPanels', 'StepItem', 'Step', 'StepPanel',
        // tab
        'Tabs', 'TabList', 'Tab', 'TabPanels', 'TabPanel',
        // overlay
        'ConfirmDialog', 'Dialog', 'Drawer', 'DynamicDialog', 'Tooltip', 'Dropdown',
        // file
        'FileUpload',
        // chart
        'Chart',
        // menu
        'Breadcrumb', 'ContextMenu', 'Dock', 'Menu', 'Menubar', 'MegaMenu', 'PanelMenu', 'TieredMenu',
        // message 
        'Message', 'Toast',
        // media
        'Carousel', 'Galleria', 'Image',
        // misc
        'AnimateOnScroll', 'Avatar', 'AvatarGroup', 'OverlayBadge', 'Badge', 'MeterGroup',
        'ScrollTop', 'ProgressBar', 'ProgressSpinner', 'StyleClass', 'Tag', 'Ripple',
        // terminal
        'Terminal', 'TerminalService',
        // table
        'DataTable', 'Column', 'ColumnGroup', 'Row',
      ]
    },
    options: {
      theme: {
        preset: Aura,
        darkModeSelector: 'system',
        cssLayer: false
      }
    }
  },
  css: ['~/assets/css/main.css', '~/assets/css/animation.css'],
  plugins: ["~/plugins/common.ts"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  compatibilityDate: '2024-07-03',
})