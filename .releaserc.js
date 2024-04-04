module.exports = {
	"branches": ["master", "staging", "alpha"],
	"plugins": [
        '@semantic-release/commit-analyzer',
        [
            "@semantic-release/changelog",
            {
              "changelogFile": "./CHANGELOG.md"
            }
          ],
        '@semantic-release/npm',
        '@semantic-release/git',
        '@semantic-release/release-notes-generator',
		[
			"@semantic-release/npm",
			{
				"npmPublish": false
			}
		]
	]
}