export type Section = {
  title: string
  slug: string
  fullSlug?: string
  subsections?: Section[]
}

export type Course = {
  slug: string
  title: string
  description: string
  sections: Section[]
}

export const courses: Course[] = [
  {
    slug: "terraform-for-beginners",
    title: "Terraform for Beginners",
    description: "Master the core concepts of Terraform",
    sections: [
      { title: "Introduction", slug: "introduction" },
      { title: "What is Terraform?", slug: "what-is-terraform" },
      {
        title: "Prerequisites",
        slug: "prerequisites",
        subsections: [
          { title: "Choose a code editor", slug: "choose-code-editor" },
          { title: "Create an AWS account", slug: "create-aws-account" },
          { title: "Create an IAM user", slug: "create-iam-user" },
          { title: "Create access keys", slug: "create-access-keys" },
          {
            title: "Install Terraform",
            slug: "install-terraform",
          },
          {
            title: "Provide AWS credentials to Terraform",
            slug: "provide-aws-credentials-terraform",
          },
        ],
      },
      {
        title: "Terraform Fundamentals",
        slug: "terraform-fundamentals",
        subsections: [
          { title: "Specify a provider", slug: "specify-provider" },
          { title: "Configure the provider", slug: "configure-provider" },
          { title: "Define a resource", slug: "define-resource" },
          {
            title: "Initialize the Terraform working directory",
            slug: "initialize-terraform-working-directory",
          },
          {
            title: "Format and validate Terraform code",
            slug: "format-validate-terraform-code",
          },
          { title: "Create infrastructure", slug: "create-infrastructure" },
          {
            title: "Version control with Git and GitHub",
            slug: "version-control-git-github",
          },
          { title: "Update infrastructure", slug: "update-infrastructure" },
          {
            title: "Reference a resource attribute",
            slug: "reference-resource-attribute",
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
            title: "Terraform style guide",
            slug: "terraform-style-guide",
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
