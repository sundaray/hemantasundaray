export type Section = {
  title: string
  slug: string
  subsections?: Section[]
}

export type Course = {
  slug: string
  title: string
  sections: Section[]
}

export const courses: Course[] = [
  {
    slug: "terraform-for-beginners",
    title: "Terraform for Beginners",
    sections: [
      { title: "Introduction", slug: "introduction" },
      { title: "What is Terraform?", slug: "what-is-terraform" },
      {
        title: "Getting Started with Terraform",
        slug: "getting-started-with-terraform",
        subsections: [
          { title: "Choose a code editor", slug: "choose-a-code-editor" },
          { title: "Create an AWS account", slug: "create-an-aws-account" },
          { title: "Create an IAM user", slug: "create-an-iam-user" },
          {
            title: "Install Terraform",
            slug: "install-terraform",
            subsections: [
              {
                title: "Using a package manager",
                slug: "using-a-package-manager",
              },
              {
                title: "Using manual installation",
                slug: "using-manual-installation",
              },
            ],
          },
          {
            title: "Configure AWS for Terraform",
            slug: "configure-aws-for-terraform",
          },
        ],
      },
      {
        title: "Terraform Fundamentals",
        slug: "terraform-fundamentals",
        subsections: [
          { title: "Specify a provider", slug: "specify-a-provider" },
          { title: "Configure the provider", slug: "configure-the-provider" },
          { title: "Define a resource", slug: "define-a-resource" },
          {
            title: "Initialize the directory",
            slug: "initialize-the-directory",
          },
          {
            title: "Format and validate Terraform code",
            slug: "format-and-validate-terraform-code",
          },
          { title: "Create infrastructure", slug: "create-infrastructure" },
          {
            title: "Version control with Git and GitHub",
            slug: "version-control-with-git-and-github",
          },
          { title: "Update infrastructure", slug: "update-infrastructure" },
          {
            title: "Reference a resource attribute",
            slug: "reference-a-resource-attribute",
          },
          {
            title: "Manage dependencies between terraform resources",
            slug: "manage-dependencies-between-terraform-resources",
          },
          { title: "Terraform variables", slug: "terraform-variables" },
          { title: "Destroy Infrastructure", slug: "destroy-infrastructure" },
          { title: "Terraform State", slug: "terraform-state" },
          { title: "Terraform Modules", slug: "terraform-modules" },
          {
            title: "Introduction to Terraform style guide",
            slug: "introduction-to-terraform-style-guide",
          },
        ],
      },
      { title: "Conclusion", slug: "conclusion" },
    ],
  },
]

export function getCourseData(slug: string): Course | undefined {
  return courses.find((course) => course.slug === slug)
}
