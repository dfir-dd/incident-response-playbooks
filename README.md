# DFIR Playbooks and Wiki

This repo will hold playbooks for common IT-Security related incidents and technical guidance for Forensic Analysis. It will be highly influenced by my job as incident responder. Feel free to share and add content as you go.

This repo will be published on the webpage [vault53.de](https://www.vault53.de) as [mdBook](https://github.com/rust-lang/mdBook) project. Every push and merge request to the master branch should trigger a redeployment.

## Structure
```
.
└── content/
    ├── README.md
    ├── SUMMARY.md
    ├── ...
    ├── playbooks  /
    │   ├── Ransomware/
    │   │   ├── ransomware-playbook.pdf
    │   │   └── ...
    │   └── Dos/
    │       ├── dos-playbook.pdf
    │       └── ...
    └── wiki /
        ├── cloud/
        │   ├── azure-cloud-analysis.md
        │   └── ...
        └── window/
            ├── window-programm-execution.md
            └── ...
```

## License
![Creative Commons SA 4.0 Logo](https://i.creativecommons.org/l/by-sa/4.0/80x15.png "CC Logo")

This work is licensed under a [Creative Commons Attribution-ShareAlike 4.0 International License](http://creativecommons.org/licenses/by-sa/4.0/)

## Development
In most cases you should be able to write plain markdown and it should compile with Github actions just fine. If you want to run it on your local environment you will need [mdBook](https://github.com/rust-lang/mdBook) and [mdbook-admonish](https://github.com/tommilligan/mdbook-admonish).

**Reference Setup:**
```
cargo install mdbook
cargo install mdbook-admonish
mdbook serve --open
```