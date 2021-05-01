<p><span style="font-family: 'Lucida Console'; line-height: 14px; font-size: 14px; display: inline-block;">░▒█░▒█░█▀▀▄░█▀▀▄░█▀▄░█▀▀░█▀▀▄░░░░█▀▀░█░░░<br />░▒█▀▀█░█▄▄█░█▄▄▀░█░█░█▀▀░█░▒█░▄▄░▀▀▄░█▀▀█<br />░▒█░▒█░▀░░▀░▀░▀▀░▀▀░░▀▀▀░▀░░▀░▀▀░▀▀▀░▀░░▀<br /></span></p>

Welcome to Harden Script Installation

Harden.sh is a single file zero config shell script to be run to harden a newly installed linux os. Harden.sh aims to set a sensible baseline which can be built upon for specific needs.

- Zero Config
- Zero Install
- Single file shell script

Run one of the following commands to automatically install wireguard.

bash <(wget -O - https://harden.sh/harden.sh)

or

bash <(curl -s https://harden.sh/harden.sh)

## Warning
This script changes the ssh port to 141. And restricts ssh to key only for the created admin user if an admin user is created.

## What does it do?
- Updates packages
- Restricts firewall to only allow ssh on `141`
- Installs [fail2ban](https://www.fail2ban.org)
- Configures the kernel
- Adds daily cronjob to update packages on server
- Installs and configures [auditd](https://linux.die.net/man/8/auditd) with sensible rules
- Disables core dumps
- Restricts logins
- Create a new admin user
- Restricts ssh and enables only the created admin user
- Adds a legal banner to /etc/issue and /etc/issue.net
- Installs packages recommended by [lynis](https://github.com/CISOfy/lynis)
- Installs and sets up [aide](https://github.com/aide/aide)
- Enables process accounting
- Disables uncommon filesystems
- Disables firewire and usb storage
- Disables uncommon network protocols
- Restricts access to /root 
- Restrict access to compilers
- Moves tmp to tmpfs
- Remounts /tmp /proc /dev /run to be more restrictive
- Purges old and removed packages

## Supported OS
- Debian 10
- Debian 8
- (Should work with most debian and debian based OS's)
- Others are coming soon

## Contributing
Please open pull requests and issues on github for anything you find.