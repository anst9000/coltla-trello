import { ACTION, AuditLog } from "@prisma/client"

export const generateLogMessage = (log: AuditLog) => {
  const { action, entityTitle, entityType } = log
  const messageInfo = `${entityType.toLowerCase()} - ${entityTitle}`

  switch (action) {
    case ACTION.CREATE:
      return `created ${messageInfo}`

    case ACTION.UPDATE:
      return `updated ${messageInfo}`

    case ACTION.DELETE:
      return `deleted ${messageInfo}`

    default:
      return `unknown action ${messageInfo}`
  }
}
