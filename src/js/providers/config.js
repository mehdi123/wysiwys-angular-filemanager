(function(angular) {
    'use strict';
    angular.module('FileManagerApp').provider('fileManagerConfig', function() {

        var values = {
            appName: '',
            defaultLang: 'en',

            listUrl: '/api/list',
            uploadUrl: '/api/upload',
            renameUrl: '/api/rename',
            copyUrl: '/api/copy',
            removeUrl: '/api/remove',
            editUrl: '/api/edit',
            getContentUrl: '/api/content',
            createFolderUrl: '/api/create',
            downloadFileUrl: '/api/download',
            compressUrl: 'bridges/php/handler.php',
            extractUrl: 'bridges/php/handler.php',
            permissionsUrl: '/api/permission',

            searchForm: true,
            sidebar: true,
            breadcrumb: true,
            allowedActions: {
                upload: true,
                rename: true,
                copy: true,
                edit: true,
                changePermissions: true,
                compress: false,
                compressChooseName: true,
                extract: false,
                download: true,
                preview: true,
                remove: true
            },

            showSizeForDirectories: false,
            useBinarySizePrefixes: false,

            previewImagesInModal: true,
            enablePermissionsRecursive: true,
            compressAsync: true,
            extractAsync: true,

            isEditableFilePattern: /\.(txt|html?|aspx?|ini|pl|py|md|css|js|log|htaccess|htpasswd|json|sql|xml|xslt?|sh|rb|as|bat|cmd|coffee|php[3-6]?|java|c|cbl|go|h|scala|vb)$/i,
            isImageFilePattern: /\.(jpe?g|gif|bmp|png|svg|tiff?)$/i,
            isExtractableFilePattern: /\.(gz|tar|rar|g?zip)$/i,
            tplPath: 'src/templates'
        };

        return {
            $get: function() {
                return values;
            },
            set: function (constants) {
                angular.extend(values, constants);
            }
        };

    });
})(angular);
