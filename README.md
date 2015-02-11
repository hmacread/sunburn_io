# sunburn.io

## Stack

* Ruby 2.1.2
* Middleman 3.x

## Simulating locally.

Pre-requisites:

* Vagrant.
* Virtualbox.

```sh
$ vagrant up
$ vagrant ssh
$ cd /vagrant
$ bundle exec middleman server
```

The site will be served up on `http://localhost:4567`.
