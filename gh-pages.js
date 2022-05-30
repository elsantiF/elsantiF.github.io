const { publish } = require('gh-pages');

publish(
    'public', {
        branch: 'gh-pages',
        repo: 'https://github.com/elsantiF/website.git',
        user: {
            name: 'elsantiF',
            email: 'santiagofarall@gmail.com'
        },
        dotfiles: true
    },
    () => {
        console.log('Published');
    }
);