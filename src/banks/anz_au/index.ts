import { IStatementConverter, StatementRecord } from "../../platform/converter/index.js"
import { PDFFile } from "../../platform/pdf/index.js"
import { Result } from "../../platform/shared/index.js"

export class ANZAustraliaConverter implements IStatementConverter {
  async convert(pdfFiles: PDFFile[]): Promise<Result<StatementRecord[], Error>> {
      return { value: [] }
  }
}
